import { ref, computed } from 'vue';
import postsData from '../data/posts.json';

const posts = ref(postsData);
const searchTerm = ref('');
const filterTag = ref('');

const setFilter = (tag) => {
  searchTerm.value = tag.toLowerCase();
};

const filteredPosts = computed(() => {
  if (!searchTerm.value) return posts.value;

  const term = searchTerm.value.toLowerCase();

  return posts.value.filter(post =>
    post.hashtags.some(tag => tag.toLowerCase().includes(term)) 
  );
});

const incrementLike = (id) => {
  const post = posts.value.find(post => post.id === id);
  if (post) post.likes++;
};

export default function useMicroblog() {
  return {
    posts,
    searchTerm,
    filterTag,
    setFilter,
    incrementLike,
    filteredPosts,
    hashtagExists: () => filteredPosts.value.length > 0
  };
}

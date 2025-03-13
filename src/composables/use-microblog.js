import { ref, computed, watch } from 'vue';

const posts = ref([
    { id: 1, title: 'Learning Vue.js 3', content: 'Vue 3 with Composition API.It is Great.', hashtags: ['vue', 'javascript'], likes: 18 },
    { id: 2, title: 'Learning Vuex', content: 'State management for Vue.It allows you to logically separate modules.', hashtags: ['vue', 'vuex'], likes: 19 },
    { id: 3, title: 'Vue Router', content: 'Create Single Page Applications.', hashtags: ['vue', 'vue-router'], likes: 16 },
    { id: 4, title: 'Testing Vue Apps', content: 'Writing tests using Vue Test Utils.', hashtags: ['vue', 'javascript', 'testing'], likes: 30 },
    { id: 5, title: 'Advanced Vue Testing', content: 'Deep dive into Vue Test Utils and Jest.', hashtags: ['vue', 'testing'], likes: 10 },
    { id: 6, title: 'Debugging Apps', content: 'Techniques to debug Vue applications effectively.', hashtags: ['vue','javascript', 'testing'], likes: 55 },
]);

const searchTerm = ref('#'); 
const filterTag = ref('');

const setSearchTerm = (term) => {
  searchTerm.value = term.startsWith('#') ? term : `#${term}`;
};

const setFilter = (tag) => {
  searchTerm.value = `#${tag}`; 
};

const hashtagExists = computed(() => {
  if (!searchTerm.value || searchTerm.value === '#') return true;
  return posts.value.some(post => post.hashtags.includes(searchTerm.value.replace('#', '')));
});

const filteredPosts = computed(() => {
  if (searchTerm.value === '#' || searchTerm.value === '' || !searchTerm.value) {
    return posts.value; 
  }
  const tag = searchTerm.value.replace('#', '');
  return posts.value.filter(post => post.hashtags.includes(tag));
});

watch(searchTerm, (newVal) => {
  if (!newVal.startsWith('#')) {
    searchTerm.value = `#${newVal}`;
  }
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
    setSearchTerm, 
    setFilter, 
    incrementLike, 
    hashtagExists, 
    filteredPosts 
  };
}

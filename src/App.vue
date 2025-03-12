<template>
  <div class="container">
    <SearchHashtag @search="setSearchTerm" />
    <Hashtag @filter="setFilter" />
    <div class="grid">
      <Card 
        v-for="post in filteredPosts" 
        :key="post.id" 
        :post="post" 
        @like="incrementLike" 
        @filter="setFilter" 
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import SearchHashtag from './components/SearchHashtag.vue';
import Hashtag from './components/Hashtag.vue';
import Card from './components/Card.vue';
import useMicroblog from './composables/use-microblog';

const { posts, searchTerm, filterTag, setSearchTerm, setFilter, incrementLike } = useMicroblog();

const filteredPosts = computed(() => {
  return posts.value.filter(post =>
    (filterTag.value ? post.hashtags.includes(filterTag.value) : true) &&
    (searchTerm.value.startsWith('#') 
      ? post.hashtags.includes(searchTerm.value.slice(1).toLowerCase())  
      : post.title.toLowerCase().includes(searchTerm.value.toLowerCase())) 
  );
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
.grid {
  margin-top: 40px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
}
</style>

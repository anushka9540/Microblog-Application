<template>
  <div class="container">
    <SearchHashtag @search="setSearchTerm" />
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
import SearchHashtag from './components/SearchHashtag.vue';
import Card from './components/Card.vue';
import useMicroblog from './composables/use-microblog';

const { posts, searchTerm, setSearchTerm, setFilter, incrementLike, filteredPosts } = useMicroblog();
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.grid {
  margin-top: 25px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
}
</style>

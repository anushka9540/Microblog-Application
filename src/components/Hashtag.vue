<template>
    <div class="hashtags-container">
      <span 
        v-for="tag in uniqueHashtags" 
        :key="tag" 
        @click="$emit('filter', tag)" 
        :class="{ active: tag === filterTag }"
        class="hashtag"
      >
        #{{ tag }}
      </span>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import useMicroblog from '../composables/use-microblog';
  
  const { posts, filterTag } = useMicroblog(); 
  const uniqueHashtags = computed(() => [...new Set(posts.value.flatMap(post => post.hashtags))]);
  </script>
  
  <style scoped>
  .hashtags-container {
    margin: 10px 0;
  }
  .hashtag {
    margin-right: 10px;
    cursor: pointer;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background 0.3s ease-in-out;
    color: black;
  }
  .hashtag.active {
    text-decoration: underline;
    color: rgb(27, 92, 138);
  }
  </style>
  
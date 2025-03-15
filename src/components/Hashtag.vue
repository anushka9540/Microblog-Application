<template>
  <div class="hashtags-container">
    <span 
      v-for="tag in hashtags" 
      :key="tag" 
      @click="$emit('filter', tag)" 
      class="hashtag"
    >
      #{{ tag }}
      <br>
    </span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  hashtags: Array, 
});
</script>

<style scoped>
.hashtags-container {
  margin-top: -6px;
}
.hashtag {
  cursor: pointer;
  font-weight: bold;
  color: #007bff;
  text-decoration: underline;
  margin-right: 5px;
}
</style> 
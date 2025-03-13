<template>
  <div>
    <label>Search Hashtags:</label>
    <input 
      v-model="searchTerm" 
      placeholder="Search Hashtag..." 
      class="search-input" 
    />
    <p v-if="showNoHashtagMessage" class="no-hashtag-message">
      No hashtag found for "{{ searchTerm }}"
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useMicroblog from '../composables/use-microblog';

const { searchTerm, hashtagExists } = useMicroblog();

const showNoHashtagMessage = computed(() => !hashtagExists.value);
</script>

<style scoped>
div {
  color: black;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
}

.search-input {
  border: none;
  padding: 8px;
  border-bottom: 1px solid black;
  width: 100%;
  max-width: 400px;
  background: transparent;
  color: black;
}

.no-hashtag-message {
  color: red;
  font-size: large;
  margin-top: 5px; 
}
</style>

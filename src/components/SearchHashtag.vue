<template>
  <div>
    <label>Search Hashtags:</label>
    <div class="search-container">
      <p class="hashtag-prefix">#</p>
      <input 
        v-model.trim="searchTerm" 
        placeholder="Search Hashtag..." 
        class="search-input" 
      />
    </div>
    <p v-if="!hashtagExists" class="no-hashtag-message">
      No hashtag found for "#{{ searchTerm }}"
    </p>
  </div>
</template>

<script setup>
import useMicroblog from '../composables/use-microblog';

const { searchTerm, hashtagExists } = useMicroblog();
</script>

<style scoped>
div {
  color: black;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
}

.search-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.search-input {
  border: none;
  padding: 8px;
  border-bottom: 1px solid black;
  width: 250px;
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

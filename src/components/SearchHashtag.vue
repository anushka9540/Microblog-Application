<template>
  <div>
      <label>Search Hashtags : </label>
      <input 
        v-model="search" 
        @keyup.enter="handleSearch" 
        placeholder="Search Hashtag..." 
        class="search-input" 
      />
    <p v-if="showNoHashtagMessage" class="no-hashtag-message">
      No hashtag found for "{{ search }}"
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import useMicroblog from '../composables/use-microblog';

const { searchTerm, setSearchTerm, hashtagExists } = useMicroblog();
const search = ref(searchTerm.value);
const showNoHashtagMessage = ref(false);

const handleSearch = () => {
  setSearchTerm(search.value);
  showNoHashtagMessage.value = !hashtagExists.value;
};

watch(search, () => {
  showNoHashtagMessage.value = false; 
});
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

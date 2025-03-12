<template>
    <div>
      <input 
        v-model="search" 
        @keyup.enter="handleSearch" 
        placeholder="Search Hashtag..." 
        class="search-input" 
      />
      <p v-if="!hashtagExists" class="no-hashtag-message">No hashtag found for "{{ search }}"</p>
    </div>
  </template>
  
  <script setup>
  import useMicroblog from '../composables/use-microblog.js';
  
  const { searchTerm, setSearchTerm, hashtagExists } = useMicroblog();
  const search = searchTerm;
  
  const handleSearch = () => {
    setSearchTerm(search.value);
  };
  </script>
  
  <style scoped>
  .search-input {
    padding: 8px;
    border: 1px solid #222121;
    border-radius: 5px;
    width: 100%;
    max-width: 400px;
    background: transparent;
    color: black;
  }
  
  .no-hashtag-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
    margin-left: 40px;
    text-align: left;
  }
  </style>
  
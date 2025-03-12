<template>
    <div class="card">
      <div class="card-content">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <p class="hashtags">
          <span v-for="tag in post.hashtags" :key="tag">
            #{{ tag }}
          </span>
        </p>
      </div>
      <div class="like-container">
        <button @click="$emit('like', post.id)" class="like-btn">❤️ {{ post.likes }}</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  defineProps(['post']);
  </script>
  
  <style scoped>
  .card {
    background: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    width: 220px;
    text-align: center;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px; 
  }
  
  .card-content {
    flex-grow: 1; 
  }
  
  .hashtags span {
    display: inline-block;
    margin: 5px;
    font-weight: bold;
  }
  
  .like-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
  
  .like-btn {
    background: white;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: red;
    padding: 8px 15px;
    border-radius: 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);
  }
  </style>
  
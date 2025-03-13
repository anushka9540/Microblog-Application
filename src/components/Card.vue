<template>
  <div class="card">
    <div class="card-content">
      <h3>{{ post.title }}</h3>
      <hr />
      <p>{{ post.content }}</p>
      <hr />
      <div class="like-container">
        <button @click="$emit('like', post.id)" class="like-btn">
          ❤️ {{ post.likes }}
        </button>
      </div>
      <p class="hashtags">
        <Hashtag :hashtags="post.hashtags" @filter="$emit('filter', $event)" />
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Hashtag from './Hashtag.vue';

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

.hashtags {
  margin-top: -5px;
}

.like-btn {
  margin-top: -5px;
  background: none;
  color: black;
}
</style>

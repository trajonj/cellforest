<template>
    <div>
      <div v-if="posts.length === 0">Loading posts...</div>
      <div v-for="(post, index) in posts" :key="index">
        <h2>{{ post.title }}</h2>
        <div v-html="post.content"></div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: []
      };
    },
    created() {
      axios.get('http://localhost:3000/api/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error('Error fetching blog posts:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2em;
    margin-bottom: 1em;
  }
  h2 {
    font-size: 1.5em;
    margin-top: 1em;
  }
  </style>
  
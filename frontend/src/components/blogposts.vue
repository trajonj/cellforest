<template>
    <div>
      <div v-if="loading">Loading posts...</div>
      <div v-else-if="errorMessage">{{ errorMessage }}</div>
      <div v-for="(post, index) in posts" :key="index">
        <!-- <h2>{{ post.title }}</h2> -->
        <div v-html="post.published"></div>
        <div v-html="post.content"></div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [],
        loading: true,
        errorMessage: null
      };
    },
    created() {
      axios.get('http://localhost:3000/api/blog-posts')
        .then(response => {
          this.posts = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching blog posts:', error);
          this.errorMessage = 'NOOOOOO ;W;';
          this.loading = false;
        });
    }
  };
  </script>
  
  <style>
  h1 {
    font-size: 2em;
    margin-bottom: 1em;
  }
  h2 {
    font-size: 1.5em;
    margin-top: 1em;
  }
  </style>
  
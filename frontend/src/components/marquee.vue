<template>
  <div class="ticker-container">
    <div class="ticker-content" :data-content="posts.map(post => post.title).join(' ')">
      <!-- Dynamically display news items from the API -->
      <span v-for="(post, index) in posts" :key="index">
        {{ post.title }}
      </span>
    </div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [], // Store the posts fetched from the API
      errorMessage: '', // Store the error message if any
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        this.posts = data.slice(0, 5);
      } catch (error) {
        this.errorMessage = 'Error fetching posts: ' + error.message;
        console.error('Error fetching posts:', error);
      }
    },
  },
};
</script>

<style scoped>
.ticker-container {
  width: 700px; /* Full width of the screen */
  height: 50px; /* Height of the ticker */
  background-color: #ccc; /* Dark background color */
  color: rgb(0, 0, 0); /* White text color */
  padding: 10px 0;
  overflow: hidden; /* Ensures the content doesn't overflow */
  position: relative;
}

.ticker-content {
  display: flex;
  white-space: nowrap; /* Ensures the text stays in a single line */
  animation: ticker 15s linear infinite; /* The animation effect */
}

.ticker-content span {
  padding-right: 20px; /* Space between items */
}

/* Duplicate the content for seamless looping */
.ticker-content::after {
  content: attr(data-content);
  display: inline-block;
  padding-left: 50px; /* Adds space between repeated content */
}

@keyframes ticker {
  0% {
    transform: translateX(100%); /* Start from the right */
  }
  100% {
    transform: translateX(-100%); /* End at the left */
  }
}

</style>

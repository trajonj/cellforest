const axios = require('axios');

async function fetchBlogPosts() {
    try {
        const response = await axios.get(
            'https://www.blogger.com/feeds/4145265067189726620/posts/default?alt=json'
        );
        console.log('Blogger API Response:', response.data);
    } catch (error) {
        console.error('Error fetching blog posts:', error.message);
    }
}

fetchBlogPosts();

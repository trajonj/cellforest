const app = require('./app');
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/api/blog-posts', async (req, res) => {
    try {
      // Fetch the data from Blogger's feed
      const response = await axios.get(
        'https://www.blogger.com/feeds/4145265067189726620/posts/default?alt=json'
      );
      // Return the content (e.g., 'entry' field from the Blogger API)
      res.json(response.data.feed.entry);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).send('Error fetching blog posts');
    }
  });

app.listen(port, () => {
    console.log(`Yippee! Server is running on port ${port}`);
});

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/blog-posts', async (req, res) => {
    try {

      const response = await axios.get(
        'https://www.blogger.com/feeds/4145265067189726620/posts/default?alt=json'
      );

      const entries = response.data.feed.entry;

      if (entries && entries.length > 0) {
        const blogPosts =  entries.map(entry => ({
          title: entry.title.$t,
          content: entry.content.$t,
          published: entry.published.$t,
        }));

        res.json(blogPosts);
      } else {
        res.status(404).send('NOOOOOOO ;O;');
      }
    } catch (error) {
      console.error('Error fetching zzzblog posts:', error.message);
      res.status(500).send('Error fetchingzzz blog posts');
    }
  });

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Yippee! Server is running on port ${port}`);
});

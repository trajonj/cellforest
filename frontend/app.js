const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started <3 ...'));
const express = require('express');
const path = require('path');
const termData = require('./db/terms.json'); // impoting data
const PORT = 3002;

const app = express();

app.use(express.static('public')); // to serve assets from our public folder.

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // this sends back an html file TO WHAT?
});

app.get('/api/terms', (req, res) => res.json(termData)); 

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

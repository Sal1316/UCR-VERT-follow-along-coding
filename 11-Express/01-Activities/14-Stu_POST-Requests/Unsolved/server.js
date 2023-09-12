const express = require('express');

const PORT = 3001;

const app = express();


app.get('/api/reviews', (req, res) => {
  const message = `${req.method}, request recieved to create reviews`;
  res.json(message);
  console.info(message);
});

app.post('/api/reviews', (req, res) => {
  const message = `${req.method}, request recieved to create reviews`;
  res.json(message);
  console.info(message);
});

app.get('/api/upvotes', (req, res) => {
  const message = `${req.method}, request recieved to create upvote`;
  res.json(message);
  console.info(message);
});

app.post('/api/upvotes', (req, res) => {
  const message = `${req.method}, request recieved to create upvote`;
  res.json(message);
  console.info(message);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!!!`)
);

/* Notes: 
- you can get stuck in a timeout if you dont conclude the reques response lifecycle.



*/ 
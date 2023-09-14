
const express = require('express');// TODO: Import express

const termData = require('./terms.json')
const PORT = 3001;

// app.use(express.static('public')); dont need bc we are not accessing the public folder.

const app = express();

app.get('/', (req, res) => {
  // console.log("req", req)
  // console.log("res", res)
  // res.send('Hello there');
  res.json(termData);

});

app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'terms.json'))
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);



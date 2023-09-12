// TODO: Import express
const express = require('express');

const termData = require('./terms.json')
const PORT = 3001;

// app.use(express.static('public'));

const app = express();

app.get('/', (req, res) => {
  console.log("req", req)
  console.log("res", res)

  res.json(termData);
});

// app.get('/terms', (req, res) => {
//   res.sendFile(path.join(__dirname, 'terms.json'))
// });

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);



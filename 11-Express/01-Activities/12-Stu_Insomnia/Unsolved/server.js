const express = require('express');

const json = require('./db/repos.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});


app.get('/api', (req, res) => {
  res.json(json);
});

app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`)
}); // server doesnt start untill you run this line.

// COde is not working: 
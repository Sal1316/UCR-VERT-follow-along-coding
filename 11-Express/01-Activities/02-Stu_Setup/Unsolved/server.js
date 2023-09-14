const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public')); // serves static file from the public folder.

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));
/* 
  by default it would send the res.send('Navigate to /send or /routes')) message
  back to the user, but in our case, we have an index.html file that get loaded instead
*/ 

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

// TODO: Create a route that will serve up the 'public/paths.html' page.
app.get('/paths', (req, res) => {
  console.log("__direname:", __dirname)
  res.sendFile(path.join(__dirname, 'public/paths.html'))
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


/* Notes: 
- to add cerntain pieces of middle ware assign with the use() function.
- path helper also helps you reslove the paths, in case you put an extra / of a missing one.

*/ 
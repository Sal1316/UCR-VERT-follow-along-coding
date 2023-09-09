const express = require('express');
const path = require('path');

const app = express(); // instance of express does not use the new keyword.
const PORT = 3001;

app.use(express.static('public')); // to add certain pieces of middleware. pass it the root of the folder that we are serving assets from
// makes app the root. 
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))// the __dirname creates and absolute path 
);

app.get('/paths', (req, res) => {
  console.log("__direname:", __dirname)
  console.log(path.join(__dirname, 'public/paths.html'))
  res.sendFile(path.join(__dirname, 'public/paths.html'))
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


/* NOTES: 
- __dirname = current directory name.

-  __dirname is a special variable in Node.js that represents the directory 
   name of the current module (i.e., the JavaScript file that contains the 
   code where __dirname is used). It provides the absolute path to the 
   directory in which the current script is located.

*/ 
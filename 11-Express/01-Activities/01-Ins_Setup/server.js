// Import Express.js
const express = require('express');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path'); // built in to node.js helps us resolve file paths.

// Initialize an instance of Express.js
const app = express(); 

// Specify on which port the Express.js server will run
const PORT = 3001; // 3001 is usually the default

// Static middleware pointing to the public folder
app.use(express.static('public')); // read files from server. Go ahead and serve files from public folder. havt to give express permission to read files first.

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/', (req, res) => res.send('Navigate to /send or /routes')); // be defaul the '/' is looking for an index.html file.

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html')) // .join just adds to the path url.
);

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

// listen() method is responsible for listening for incoming connections on the specified port. take 2 parameters.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

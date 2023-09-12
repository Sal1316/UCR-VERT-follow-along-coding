
const express = require('express');// Import Express.js
const path = require('path'); // Import built-in Node.js package 'path' to resolve path of files that are located on the server

const app = express(); // Initialize an instance of Express.js


const PORT = 3001; // Specify on which port the Express.js server will run, 3001 is usually the default


app.use(express.static('public'));// Static middleware pointing to the public folder
 /*  
  the express.static('public') is a middleware by express.js itself. it serves up static files, 
  such as HTML, CSS, and JS, Images, and other assets to the client (browser) directly from the specified directory. 
  eed to give express permission to read files first. How?
 */

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/', (req, res) => res.send('Navigate to /send or /routes')); // be defaul the '/' is looking for an index.html file.
// res.send() is used to send a response back to the client. In this case, it sends the string 'Navigate to /send or /routes' as the response.

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

const express = require('express');

const app = express();
const PORT = 3001;

// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path
// Example: http://localhost:3001/images/cat.jpg

app.use(express.static('public')); // everything becomes avaible from the public folder at the root without specifiing the public directory on the web.

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);


/* NOTES: 
- when you use app.use(express.static('public')); anything inside this folder becomes available at the root. 
  but why is the cat.jpg showing?
  ans: bc, the html is pointing to that page.



*/ 
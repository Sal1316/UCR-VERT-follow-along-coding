const express = require('express');

const app = express();
const PORT = 3001;
const path = require('path');

app.use(express.static('public'));

// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);


/* NOTES:
- why you serve up files with the static middleware, you are basically giving your browser access to them
  for example, without using any other code, you can access the files in the public folder through the url
    path.join(__dirname, '/images/google.png'). the route parameters are what accesses the file if it is there.
    



*/ 
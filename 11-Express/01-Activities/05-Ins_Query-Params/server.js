const express = require('express');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

// GET route to get all of the terms
app.get('/api/terms', (req, res) => res.json(termData)); // this returns all the info from terms file.

// GET route that returns any specific term
app.get('/api/terms/:term', (req, res) => { // filters through the terms.json file, and finds the one with :terms('Route Parameters') key
 
  const requestedTerm = req.params.term.toLowerCase(); /* the term key corresponds to the term in line 12. 
    if the /api/terms/:name, was 'name' insteadof 'term', then we would change it in req.params.name.toLowerCase().
     
  */
  // Iterate through the terms name to check if it matches `req.params.term`
  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) { // means: ('rest' === 'rest')
      return res.json(termData[i]);
    }
  }

  return res.json('No match found');// Return a message if the term doesn't exist in our terms.json file
});

// Fallback route for when a user attempts to visit routes that don't exist, like the root route.
app.get('*', (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);

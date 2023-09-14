const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`)); // look into how this works?  

app.get('/', (req, res) => {
  res.send("hello from the root route");
})

// gets all the terms sorted.
app.get('/api/terms/', (req, res) => { //

  const hasQuery = Object.keys(req.query).length > 0; /* req.query is empty by default, but here we 
  check to see the req contains a query. If it does, then it means that we have a query.*/

  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});


// GET route that returns any specified term
app.get('/api/term/:term', (req, res) => {

  const requestedTerm = req.params.term.toLowerCase(); // gets the 'router parameter' term and lowercases it ex /api/term/docker

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]); // if the following criteria is met, then it returns the "Docker" object.
    }
  }

  // Return a message if the term doesn't exist in our terms.json file
  return res.json('No term found');
});


app.get('/api/terms/:category', (req, res) => { // same as above, but here 'router parameter' is the catergory. ex, web, networking, cloud...
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]); // returns an array with objects matching the category in the route parameter.
    }
  }
  return res.json(result);
});



app.get('/api/categories', (req, res) => {

  const categories = termData.map((term) => term.category); // makes an array with all the categories, ['web', 'networking', 'cloud', 'web', 'web', 'cloud', 'networkig'].
  console.log('categories', categories)

  const result = categories.filter((cat, i) => categories.indexOf(cat) === i); // filters out any duplicate categories. 'i' increments automatically.

  return res.json(result); // returns ['web', 'networking', 'cloud']
});

app.listen(PORT, () =>
  console.info(`Example is app listening at http://localhost:${PORT}`)
);


/* NOTES:
- the filter method in the fx above uses the indexOf() to compare indexes of the category. 
    if the indexes are equal, it means that this is the first occurance.
    if the indexes are not equal it means that this is a duplicate.
    
    the incrementation of 'i' is handled INTERNALLY by the filter function, and you don't need to worry about manually incrementing it. It ensures that your 
    callback function is called for each element in the array, and it provides the correct index for each iteration.

*/ 
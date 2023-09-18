const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api); // serves up api endpoints that power our static pages.

app.use(express.static('public'));

// SERVES UP STATIC PAGES: 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);
// WILDCARD ROUTE: gets all other url requests that dont match what we have.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
})

// TODO: API ROUTES 
// GET route for /api/diagnostics:
// POST route for /api/diagnostics: 



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

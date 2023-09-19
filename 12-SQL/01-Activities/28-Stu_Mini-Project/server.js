const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3001

//Middleware: 
// app.use()

// mysql Connection: 
const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',  // MySQL username,
      password: 'Helifino',// MySQL password
      database: 'movie_db'
},
      console.log(`COnnEcted to thE mOvie_db dAtabAse.`)
)

app.get('/api/movies', (req, res) => {
      const articles = [];
      // code to retrieve a movie...
      res.json(articles);
});

app.post('/articles', (req, res) => {
      // code to add a a movie...
      res.json(req.body);
});

app.put('/articles/:id', (req, res) => {
      const { id } = req.params;
      // code to update a movie...
      res.json(req.body);
});

app.delete('/articles/:id', (req, res) => {
      const { id } = req.params;
      // code to delete a movie...
      res.json({ deleted: id });
});

app.listen(3000, () => console.log('server started'));
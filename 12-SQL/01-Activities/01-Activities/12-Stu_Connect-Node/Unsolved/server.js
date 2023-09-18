const express = require('express');
const mysql = require('mysql2'); // lets us make a connectio to db

const PORT = process.env.PORT || 3001;
const app = express();

// middleware: technically not needed.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection( // connects to mysql server.
  { // configuration object. 
    host: 'localhost',
    user: 'root',
    password: 'Helifino',
    database: 'classlist_db' // db name.
    
  },
  console.log(`Connected to the classlist_db database.`)
);

// query the db.
db.query('SELECT * FROM students', function (err, results) {
  console.log(results); 
});

// Defalut response fo r any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

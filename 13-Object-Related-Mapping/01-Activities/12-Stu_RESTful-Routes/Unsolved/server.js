const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


/* NOTES: 
- forse: true, it forces sync of the models. force: true, does a drop and create of db.

- models represnt the tables that you are crating. 
- property names end up being the field names.

- migration - 

*/ 
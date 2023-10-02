const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const routes = require("./controllers");
const sequelize = require("./config/connection");
// Import the custom helper methods
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

// Incorporate the custom helper methods in to express view engine
const hbs = exphbs.create({ helpers: helpers }); // passing in the helpers as the properties of this object.

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`App in now listening on: http://localhost:${PORT} 🔥`)
  );
});

/*NOTES: 

- Incorporating Helpers: what we have to do is pass the helpes as the properties
  of the object. In this case they are the properties of the express handlebars obj.
  This will make the properties available to us in the application. The property,
  might need to be called 'helpers' due to the convention. ex, { helpers: { format_time: () => {} }}
  Calling the property invokes the fx.


*/

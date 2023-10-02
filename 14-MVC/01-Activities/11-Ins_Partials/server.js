const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const routes = require("./controllers/index");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({}); // creates express handlebars instance with default configuration options.

app.engine("handlebars", hbs.engine); // sets up the engine for rendering templates with handlebars extensions.
app.set("view engine", "handlebars"); //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`App in now listening on: http://localhost:${PORT} 🔥`)
  );
});

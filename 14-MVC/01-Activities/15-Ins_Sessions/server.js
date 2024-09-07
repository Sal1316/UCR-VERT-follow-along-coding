const path = require("path");
const express = require("express");
// IMPORT EXPRESS-SESSION:
const session = require("express-session");
const exphbs = require("express-handlebars");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

// USE SESSIONS:
app.use(session({
  secret: "Super secret secret", // this is a string used to sign the session ID cookie. You would want this in the .env file for security.
  resave: false, // forces the sesiong to be saved back to the session store(storage).
  saveUninitialized: false, // forces a session that in uninitializes
}));

const hbs = exphbs.create({ helpers });

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

/* SESSION NOTES: 

- The most common usage of sessions is to store your logged in information.
  So you dont have to keep login in.



*/

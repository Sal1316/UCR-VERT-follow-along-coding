const path = require("path");
const express = require("express");
const session = require("express-session"); // imported
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store); // import session first

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: "Super secret secret",
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day // specifies how long the cookie is valid for.
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    // store allows us to store it in sequelize db.
    db: sequelize,
  }),
};

app.use(session(sess)); //this saves the cookie into session storage.

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\n 🦚 Server running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});

/* SESSION-STORAGE 
- the only way to log out of you session storage is to wait for the cookie time frame to expreire or
  to destroy the session by loggin out. Otherwise, you are still logged in when you revisite the page.
*/

// Dependencies
const express = require("express");
// import express-handlebars
const exphbs = require("express-handlebars");
const path = require("path");

const hbs = exphbs.create({}); // refrence to Handlebar.js engine we created.

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine); // this line does: In NOTES:
app.set("view engine", "handlebars"); // this line does: In NOTES:

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/dish-routes")); // this lets express know that we have routes.

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});

/* NOTES: 

- app.engine('handlebars', hbs.engine) > app.engine() is an Express.js method used to set up a template engine for rendering dynamic content.
 + 1st argument 'handlebars' >  specifies the name of the template engine. This name can be used later to set the view engine.
 + 2nd argument 'hbs.engine' > is a reference to the Handlebars.js engine that you've created earlier using exphbs.create({}).
This line essentially tells Express that you want to use the Handlebars.js template engine for rendering views with the "handlebars" extension.

- app.set('view engine', 'handlebars') > app.set is used to configure various settings in Express.js.
 + 1st argument 'view engine' specifies that you are configuring the view engine setting.
 + 2nd argument 'handlebars' specifies the name of the view engine, which must match the name you used in app.engine.
This line sets the view engine of your Express application to "handlebars," which means that when you later render templates, 
Express will use Handlebars.js to process and render them.


*/

// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/dish-routes"));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
router.get("/dish/:num", async (req, res) => {
  // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
  return res.render("dish", dishes[req.params.num - 1]); // 1st param is the veiw, 2nd param is what you want to pass in to the view.
});

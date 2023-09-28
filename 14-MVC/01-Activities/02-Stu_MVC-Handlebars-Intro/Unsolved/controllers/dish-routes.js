// Is this a Model, a View, or a Controller?
// This file is a Controller.
// What is it responsible for handling?
// It routes commands to the Model and View parts.

const router = require("express").Router();

// GET route for getting all of the dishes that are on the menu
router.get("/", async (req, res) => {
  res.render("all");
  /*
   res.render("layouts/main"); // shows the main without the menu items as the body.
    this method is rendering the 'all' the Handlebars.js templates. 
    Otherwide, res.render("layouts/main") would render a single template. 
    */
});

module.exports = router;

/* NOTES: 
- 'res' > is the response object in an Express.js route handler. 
    It's used to send a response back to the client (usually a web browser).

- res.render('all') > is a method provided by the Express.js framework for rendering HTML templates. 
    In this case, it's rendering the "all" template.

- "all" > is the name of the template that is being rendered. 
    Templates are typically associated with views and define the structure and content of the HTML 
    page that will be sent as a response to the client.


*/

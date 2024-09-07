// Dependencies
const express = require("express");
const path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public"))); //gives access to the files inside the public folder.

app.use(require("./controllers/dish-routes")); // imports the routes

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});

//
//
//

/* NOTES: 
- there is No DB so everything will have to be staticly rendered on activity 1-6
- 
- app.use(require("./controllers/dish-routes")) > 
    + the require() imports the module located at the controler/dish-routes directory, 
      whict typically include route handlers, and route definitions. That way you dont need them here. Makes cleaner code.
    + the app.use() > essentially mounts the routes defined in the 'dish-routes.js' module into your application. 
      This allow you to match the http requst to the defined routes in the file.

*/

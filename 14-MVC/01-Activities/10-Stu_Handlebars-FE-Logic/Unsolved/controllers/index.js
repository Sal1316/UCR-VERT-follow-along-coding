const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;

/* NOTES: 

- We consolidated all the home routes, adn api routes into one index file
      + the api routed make get and post request, and the home routs just display the info.



*/

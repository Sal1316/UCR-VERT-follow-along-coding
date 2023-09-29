const router = require("express").Router();

const apiRoutes = require("./api"); // shoudent this refrence the ./api/index.js since it has the api routes?
const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes); // SEE NOTES # 1
router.use("/api", apiRoutes); // SEE NOTES # 2

module.exports = router;

/* NOTES: 
# 1: not sure who we are accessing the GET reqeusts from the home-router.js?
      ans: specifies that any request to the root, will be handled by the 
      variable 'homeRoutes.' You use router.use("/", homeRoutes); to mount 
      the routes defined in homeRoutes at the root path ("/"). This means 
      that any requests to the root path will be handled by the routes 
      defined in home-routes.js.

# 2: 2 is the same as 1 except that they are handled by the apiRoutes, 
      which 'Post' and 'Put' to the DB.


- We consolidated all the home routes, adn api routes into one index file
      + the api routed make get and post request, and the home routs just 
      display the info.

- WHAT CALLS/USES THIS INDEX FILE?

*/

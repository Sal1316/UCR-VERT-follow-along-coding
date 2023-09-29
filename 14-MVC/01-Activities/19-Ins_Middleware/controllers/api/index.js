const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;


/*NOTES: 
- Rather than doing the authenticaion middleware that check if user is logged in in the routes, 
      we can use middleware to help us out.

*/ 
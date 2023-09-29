const router = require('express').Router();

const dishRoutes = require('./dish-routes');

router.use('/dish', dishRoutes);

module.exports = router;

// This file is the same as the other index but for api routes.
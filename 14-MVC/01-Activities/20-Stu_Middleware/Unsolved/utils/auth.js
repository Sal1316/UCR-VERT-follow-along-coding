const withAuth = (req, res, next) => {
  // if the user it not logged in, we redict them to the login page. This is directly from the '/gallery/:id' and '/painting/:id' routes
  if (!req.session.loggedIn) {
    res.redirect("/login"); // redirects to another controler '/login' in the home routes
  } else {
    next();
  }
};

module.exports = withAuth;


// To use this middleware, just add as the second argument in the route parameters.
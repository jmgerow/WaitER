var db = require("../models");

  module.exports = function(app, passport, ensureLoggedIn) {
  // Load index page
  app.get("/", function(req, res) {
    db.UserInfo.findAll({}).then(function() {
      res.render("index");
    });
  });

  // Start Auth0 Login
  app.get(
    "/login",
    passport.authenticate("auth0", {
      scope: "openid email profile"
    }),
    function(req, res) {
      res.redirect("/");
    }
  );
  
  // Path to to use after successful login
  app.get(
    "/callback",
    passport.authenticate("auth0", {
      failureRedirect: "/"
    }),
    function(req, res) {
      res.redirect("/user");
    }
  );
  
  // Path to logout user
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Get user profile
  app.get("/user", ensureLoggedIn, function(req, res) {
    res.render("userProfile", {
      user: req.user.displayName,
      picture: req.user.picture,
      loggedIn: res.locals.loggedIn
    });
  });

  // Hospital list selection page
  app.get("/waitER_MAKE_APPOINTMENT", ensureLoggedIn, function(req, res) {
    res.render("waitER_MAKE_APPOINTMENT");
  });

  // Hospital list selection page
  app.get("/waitER_INFO_ONLY", function(req, res) {
    res.render("waitER_INFO_ONLY");
  });

  // Hospital list selection page
  app.get("/northwestern", ensureLoggedIn, function(req, res) {
    res.render("northwestern");
  });

  // Hospital list selection page
  app.get("/rush", ensureLoggedIn, function(req, res) {
    res.render("rush");
  });

  // Hospital list selection page
  app.get("/loyolaMedicalCenter", ensureLoggedIn, function(req, res) {
    res.render("loyolaMedicalCenter");
  });

  // Hospital list selection page
  app.get("/universityOfChicago", ensureLoggedIn, function(req, res) {
    res.render("universityOfChicago");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

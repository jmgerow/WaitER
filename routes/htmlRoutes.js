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
      failureRedirect: "/login"
    }),
    function(req, res) {
      res.redirect(req.session.returnTo || "/user");
    }
  );

  // Path to logout user
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Get user profile
  app.get("/user", ensureLoggedIn, function(req, res, next) {
    res.render("userProfile", {
      user: req.user,
      userProfile: JSON.stringify(req.user, null, "  ")
    });
    console.log(res.req.user.displayName);
  });

  // Hospital list selection page
  app.get("/waitER", ensureLoggedIn, function(req, res) {
    res.render("waitER", {
      user: req.user,
      userProfile: JSON.stringify(req.user, null, "  ")
    });
  });

  // Hospital list selection page
  app.get("/northwestern", function(req, res) {
    res.render("northwestern");
  });

  // Hospital list selection page
  app.get("/rush", function(req, res) {
    res.render("rush");
  });

  // Hospital list selection page
  app.get("/loyolaMedicalCenter", function(req, res) {
    res.render("loyolaMedicalCenter");
  });

  // Hospital list selection page
  app.get("/universityOfChicago", function(req, res) {
    res.render("universityOfChicago");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

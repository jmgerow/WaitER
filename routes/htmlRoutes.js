var db = require("../models");

module.exports = function (app, passport, ensureLoggedIn) {
  // Load index page
  app.get("/", function (req, res) {
    db.UserInfo.findAll({}).then(function () {
      res.render("index");
    });
  });

  app.get("/login", passport.authenticate("auth0", {
    scope: "openid email profile"
  }),
    function (req, res) {
      res.redirect("/");
    });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/callback",
    passport.authenticate("auth0", {
      failureRedirect: "/failure"
    }),
    function (req, res) {
      res.redirect(req.session.returnTo || "/user");
    }
  );

  /* GET user profile. */
  app.get('/', ensureLoggedIn, function (req, res, next) {
    res.render('user', {
      user: req.user,
      userProfile: JSON.stringify(req.user, null, '  ')
    });
  });

  app.get("/waitER", function (req, res) {
    res.render("waitER");
  });

  // Load example page and pass in an example by id

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};

var db = require("../models");

module.exports = function(app) {
  // Create a new example
  app.post("/api/userinfo", function(req, res) {
    // console.log(req.body);
    db.UserInfo.create({
      patientFirst: req.body.firstName
    }).then(function(dbUserInfo) {
      res.json(dbUserInfo);
    });
  });
};

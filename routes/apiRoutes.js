var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/userinfo", function (req, res) {
    db.UserInfo.create({
      patientFirst: req.body.firstName,
      patientLast: req.body.lastName,
      patientEmail: req.body.email,
      patientPassword: req.body.password,
      patientInsurance: req.body.insuranceProvider,
      reasonForVisit: req.body.reasonForVisit
    })
      .then(function (dbUserInfo) {
        res.json(dbUserInfo);
      });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};

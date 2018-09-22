var db = require("../models");

module.exports = function(app) {
  app.post("/api/userinfo", function(req, res) {
    db.UserInfo.create({
      patientFirst: req.body.firstName,
      patientLast: req.body.lastName,
      patientEmail: req.body.email,
      patientPassword: req.body.password,
      patientInsurance: req.body.insuranceProvider,
      reasonForVisit: req.body.reasonForVisit,
      zipCode: req.body.zipCode
    }).then(function(dbUserInfo) {
      res.json(dbUserInfo);
    });
  });

  // Route to post userinformation into the Loyola Medical Center table
  app.post("/api/loyolamedicalcenter", function(req, res) {
    db.LoyolaMedicalCenter.create({
      patientFirst: req.body.patientFirst,
      patientLast: req.body.patientLast,
      patientInsurance: req.body.reasonForVisit,
      reasonForVisit: req.body.patientInsurance,
    }).then(function(dbLoyolaMedicalCenter) {
      res.json(dbLoyolaMedicalCenter);
    });
  });

  // Route to post userinformation into the University of Chicago table
  app.post("/api/universityofchicago", function(req, res) {
    db.UniversityOfChicago.create({
      patientFirst: req.body.patientFirst,
      patientLast: req.body.patientLast,
      patientInsurance: req.body.reasonForVisit,
      reasonForVisit: req.body.patientInsurance,
    }).then(function(dbUniversityOfChicago) {
      res.json(dbUniversityOfChicago);
    });
  });

  // Route to post userinformation into the Northwestern table
  app.post("/api/northwestern", function(req, res) {
    db.Northwestern.create({
      patientFirst: req.body.patientFirst,
      patientLast: req.body.patientLast,
      patientInsurance: req.body.reasonForVisit,
      reasonForVisit: req.body.patientInsurance,
    }).then(function(dbNorthwestern) {
      res.json(dbNorthwestern);
    });
  });

  // Route to post userinformation into the Rush table
  app.post("/api/rush", function(req, res) {
    db.Rush.create({
      patientFirst: req.body.patientFirst,
      patientLast: req.body.patientLast,
      patientInsurance: req.body.reasonForVisit,
      reasonForVisit: req.body.patientInsurance,
    }).then(function(dbRush) {
      res.json(dbRush);
    });
  });

  //route to post userappts  
  app.post("/api/userappt", function (req, res) {
    console.log('req', req.body.waitTime)
    db.UserAppt.create({
      hospitalName: req.body.hospitalName,
      waitTime: req.body.waitTime
    })
      .then(function (dbUserAppt) {
        res.json(dbUserAppt);
        console.log('dbUserAppt', dbUserAppt)
      });
  });

  //routes for each hospital to calculate wait time
  app.get("/api/rush", function(req, res) {
    db.Rush.findAll({}).then(function(dbRush) {
      res.json(dbRush);
    });
  });
  app.get("/api/loyolamedicalcenter", function(req, res) {
    db.LoyolaMedicalCenter.findAll({}).then(function(dbLoyolaMedicalCenter) {
      res.json(dbLoyolaMedicalCenter);
    });
  });
  app.get("/api/northwestern", function(req, res) {
    db.Northwestern.findAll({}).then(function(dbNorthwestern) {
      res.json(dbNorthwestern);
    });
  });
  app.get("/api/universityofchicago", function(req, res) {
    db.UniversityOfChicago.findAll({}).then(function(dbUniversityOfChicago) {
      res.json(dbUniversityOfChicago);
    });
  });

  //route to get appt data
  app.get("/api/userappt", function(req, res) {
    db.UserAppt.findAll({}).then(function(UserAppt) {
      res.json(UserAppt);
    });
  });

  //route to delete appts
  app.delete("/api/userappt", function(req, res) {
    db.UserAppt.destroy({
      where: {}
    }).then(function(dbUserAppt) {
      res.json(dbUserAppt);
    });
  });
};

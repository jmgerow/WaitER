var db = require("../models");


module.exports = function (app) {


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

};




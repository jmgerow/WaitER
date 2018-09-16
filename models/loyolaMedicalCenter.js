module.exports = function(sequelize, DataTypes) {
  var LoyolaMedicalCenter = sequelize.define("LoyolaMedicalCenter", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVisit: DataTypes.TEXT
  });
  return LoyolaMedicalCenter;
};

module.exports = function(sequelize, DataTypes) {
  var LoyolaMedicalCenter = sequelize.define("LoyolaMedicalCenter", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientFull: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVist: DataTypes.TEXT
  });
  return LoyolaMedicalCenter;
};

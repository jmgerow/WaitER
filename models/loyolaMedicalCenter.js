module.exports = function(sequelize, DataTypes) {
  var loyolaMedicalCenter = sequelize.define("loyolaMedicalCenter", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientFull: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVist: DataTypes.TEXT
  });
  return loyolaMedicalCenter;
};

module.exports = function(sequelize, DataTypes) {
  var userInfo = sequelize.define("userInfo", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientEmail: DataTypes.STRING,
    patientPassword: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVisit: DataTypes.TEXT
  });
  return userInfo;
};

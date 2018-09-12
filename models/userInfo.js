module.exports = function(sequelize, DataTypes) {
  var userInfo = sequelize.define("waitER", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientFull: DataTypes.STRING,
    patientEmail: DataTypes.STRING,
    patientPassword: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVist: DataTypes.TEXT
  });
  return userInfo;
};

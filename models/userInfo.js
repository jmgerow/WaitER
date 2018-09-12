module.exports = function(sequelize, DataTypes) {
  var userInfo = sequelize.define("waitER", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientFull: DataTypes.STRING,
    patientEmail: DataTypes.string,
    patientPassword: DataTypes.string,
    patientInsurance: DataTypes.STRING,
    reasonForVist: DataTypes.TEXT
  });
  return userInfo;
};

module.exports = function(sequelize, DataTypes) {
  var userInfo = sequelize.define("userInfo", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientFull: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVist: DataTypes.TEXT
  });
  return userInfo;
};

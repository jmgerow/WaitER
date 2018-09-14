module.exports = function(sequelize, DataTypes) {
  var UserInfo = sequelize.define("UserInfo", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientEmail: DataTypes.STRING,
    patientPassword: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVisit: DataTypes.TEXT
  });
  return UserInfo;
};

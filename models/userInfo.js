module.exports = function(sequelize, DataTypes) {
  var UserInfo = sequelize.define("UserInfo", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientEmail: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVisit: DataTypes.STRING,
    zipCode: DataTypes.INTEGER
  });
  return UserInfo;
};

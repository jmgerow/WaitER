module.exports = function(sequelize, DataTypes) {
  var Northwestern = sequelize.define("Northwestern", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientFull: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVist: DataTypes.TEXT
  });
  return Northwestern;
};

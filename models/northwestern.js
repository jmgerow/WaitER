module.exports = function(sequelize, DataTypes) {
  var Northwestern = sequelize.define("Northwestern", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVisit: DataTypes.TEXT
  });
  return Northwestern;
};

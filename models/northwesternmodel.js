module.exports = function(sequelize, DataTypes) {
  var northwestern = sequelize.define("northwestern", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientFull: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVist: DataTypes.TEXT
  });
  return northwestern;
};

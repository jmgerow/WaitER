module.exports = function(sequelize, DataTypes) {
  var Rush = sequelize.define("Rush", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientFull: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVist: DataTypes.TEXT
  });
  return Rush;
};

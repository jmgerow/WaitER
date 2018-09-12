module.exports = function(sequelize, DataTypes) {
  var UniversityOfChicago = sequelize.define("UniversityOfChicago", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientFull: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVist: DataTypes.TEXT
  });
  return UniversityOfChicago;
};

module.exports = function(sequelize, DataTypes) {
  var UniversityOfChicago = sequelize.define("UniversityOfChicago", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVisit: DataTypes.TEXT
  });
  return UniversityOfChicago;
};

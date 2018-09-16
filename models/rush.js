module.exports = function(sequelize, DataTypes) {
  var Rush = sequelize.define("Rush", {
    patientFirst: DataTypes.STRING,
    patientLast: DataTypes.STRING,
    patientInsurance: DataTypes.STRING,
    reasonForVisit: DataTypes.TEXT
  });
  return Rush;
 
};


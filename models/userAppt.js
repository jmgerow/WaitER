module.exports = function(sequelize, DataTypes) {
    var UserAppt = sequelize.define("UserAppt", {
      hospitalName: DataTypes.STRING,
      waitTime: DataTypes.STRING
    });
    return UserAppt;
  };
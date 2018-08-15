module.exports = function (sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    client_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    login_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
    }

  });
  Client.associate = function(models){
    Client.hasMany(models.Product, {
      onDelete: "cascade"
    });
  };
  return Client;
};

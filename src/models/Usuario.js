const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {}
module.exports = (sequelize) => {
  Usuario.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM("ADMIN", "ASSISTENTE SOCIAL", "SECRETARIO"),
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );

  return Usuario;
};

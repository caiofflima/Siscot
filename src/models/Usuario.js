const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class Usuario extends Model {
  async checkPassword(password) {
    const response = await bcrypt.compare(password, this.password);
    console.log("aq", response);
    return response;
  }

  generateToken() {
    return jwt.sign({ id: this.id }, "secret", { expiresIn: 86400 });
  }
}

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
      hooks: {
        beforeCreate: async (usuario) => {
          const hashedPassword = await bcrypt.hash(usuario.password, 10);
          usuario.password = hashedPassword;
        },
        beforeUpdate: async (usuario) => {
          const hashedPassword = await bcrypt.hash(usuario.password, 10);
          usuario.password = hashedPassword;
        },
      },
    }
  );

  return Usuario;
};

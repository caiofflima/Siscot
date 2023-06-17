const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class Usuario extends Model {
  async checkPassword(senha) {
    const response = await bcrypt.compare(senha, this.senha);
    return response;
  }

  generateToken() {
    return jwt.sign({ id: this.id }, "secret", { expiresIn: 86400 });
  }
}

module.exports = (sequelize) => {
  Usuario.init(
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      cargo: DataTypes.ENUM("ADMIN", "ASSISTENTE SOCIAL", "SECRETARIO"),
    },
    {
      sequelize,
      modelName: "Usuario",
      hooks: {
        beforeCreate: async (usuario) => {
          const hashedPassword = await bcrypt.hash(usuario.senha, 10);
          usuario.senha = hashedPassword;
        },
        beforeUpdate: async (usuario) => {
          const hashedPassword = await bcrypt.hash(usuario.senha, 10);
          usuario.senha = hashedPassword;
        },
      },
    }
  );

  return Usuario;
};

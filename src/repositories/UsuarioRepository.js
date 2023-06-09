const { Usuario } = require("../db");
const { Op } = require("sequelize");

class UsuarioRepository {
  async findAll() {
    return Usuario.findAll({
      where: {
        deleted: { [Op.not]: true },
      },
    });
  }

  async findById(id) {
    console.log(id);
    return Usuario.findOne({
      where: { id },

      deleted: {
        [Op.not]: true,
      },
    });
  }

  async findOne(email) {
    return Usuario.findOne({
      where: { email },

      deleted: {
        [Op.not]: true,
      },
    });
  }

  async create(usuario) {
    return Usuario.create(usuario);
  }

  async update(id, usuario) {
    return Usuario.update(usuario, { where: { id } });
  }

  async delete(id) {
    return Usuario.update({ deleted: true }, { where: { id } });
  }
}

module.exports = new UsuarioRepository();

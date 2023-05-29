const { Usuario } = require('../db');


class UsuarioRepository {
  async findAll() {
    return Usuario.findAll();
  }

  async findById(id) {
    return Usuario.findByPk(id);
  }

  async findOne(email) {
    return Usuario.findOne({ where: { email } });
  }

  async create(usuario) {
    return Usuario.create(usuario);
  }

  async update(id, usuario) {
    return Usuario.update(usuario, { where: { id } });
  }

  async delete(id) {
    return Usuario.destroy({ where: { id } });
  }
}

module.exports = new UsuarioRepository;

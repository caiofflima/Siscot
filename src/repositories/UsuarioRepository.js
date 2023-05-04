const db = require('../db');
const { Usuario } = require('../models/Usuario')(db);

class UsuarioRepository {
  async findAll() {
    return Usuario.findAll();
  }

  async findById(id) {
    return Usuario.findByPk(id);
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

module.exports = UsuarioRepository;

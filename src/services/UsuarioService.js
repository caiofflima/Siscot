const usuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
  async findAll() {
    return usuarioRepository.findAll();
  }

  async findById(id) {
    return usuarioRepository.findById(id);
  }

  async create(usuario) {
    return usuarioRepository.create(usuario);
  }

  async update(id, usuario) {
    return usuarioRepository.update(id, usuario);
  }

  async delete(id) {
    return usuarioRepository.delete(id);
  }
}

module.exports = UsuarioService;

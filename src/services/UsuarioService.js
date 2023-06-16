const usuarioRepository = require('../repositories/UsuarioRepository');

class UsuarioService {
  async findAll() {
    return usuarioRepository.findAll();
  }

  async findById(id) {
    return usuarioRepository.findById(id);
  }

  async findOne(email) {
    return usuarioRepository.findOne(email);
  }

  async create(usuario) {
    if (await this.findOne(usuario.email)) {
      return null;
    }
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

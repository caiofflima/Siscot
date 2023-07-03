const bcrypt = require('bcrypt');

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
    if (usuario.senha == "Senha Criptografada") {
      const user = await usuarioRepository.findById(id);
      usuario.senha = user.senha;
    } else {
      const hashedPassword = await bcrypt.hash(usuario.senha, 10);
      usuario.senha = hashedPassword;
    }
    return usuarioRepository.update(id, usuario);
  }

  async delete(id) {
    return usuarioRepository.delete(id);
  }
}

module.exports = UsuarioService;

const UsuarioService = require('../services/UsuarioService');
const usuarioService = new UsuarioService();

class UsuarioController {
  async index(req, res) {
    const usuarios = await usuarioService.findAll();
    res.json(usuarios);
  }

  async show(req, res) {
    const { id } = req.params;
    const usuario = await usuarioService.findById(id);
    res.json(usuario);
  }

  async store(req, res) {
    const usuario = await usuarioService.create(req.body);
    res.status(201).json(usuario);
  }

  async update(req, res) {
    const { id } = req.params;
    await usuarioService.update(id, req.body);
    res.sendStatus(204);
  }

  async delete(req, res) {
    const { id } = req.params;
    await usuarioService.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new UsuarioController();

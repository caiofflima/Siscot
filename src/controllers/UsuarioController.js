const UsuarioRepository = require('../repositories/UsuarioRepository');
const UsuarioService = require('../services/UsuarioService');
const usuarioService = new UsuarioService();
const { Usuario } = require('../db');
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
    const { email } = req.body;
    let userExists = await Usuario.findAll({where: {email}});
    
    if(userExists != null){
      res.status(409).send('Email já cadastrado')
    }else{
      const usuario = await usuarioService.create(req.body);
       res.status(201).json(userExists);
    }
    
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

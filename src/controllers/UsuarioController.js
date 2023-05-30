const UsuarioService = require('../services/UsuarioService');
const usuarioService = new UsuarioService();
const { Usuario } = require('../db');
const bcrypt = require('bcryptjs');

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
    const { name, email, password, role } = req.body;
    let userExists = await Usuario.findOne({where: {email}});

    if(userExists != null && userExists.length != 0){
      res.status(409).send('Email já cadastrado');
    }else{
      let password_crypt = await bcrypt.hashSync(password, 10);
      const usuario = await Usuario.create( { name, email, password: password_crypt, role } );

      res.status(201).json(usuario);
    }
    
  }

  async update(req, res) {
    
    try{
      const { id } = req.params;
      const { name, email, password, role } = req.body;

      let data = await usuarioService.findById(id);

      if(data === null)
        return res.status(400).json("Usuario não encontrado");
      
      if(data.password != password){
        let password_crypt = await bcrypt.hashSync(password, 10);
        await Usuario.update( { name, email, password: password_crypt, role }, { where: { id: Number(id) }} );

        data = await usuarioService.findById(id)

        return res.status(200).json(data);
      }

      await Usuario.update({ name, email, password, role }, { where: { id: Number(id) } });

      data = await usuarioService.findById(id);
          
      return res.status(200).json(data)
      
    }catch(error){
      return res.status(500).json(error.message)
    }

  }

  async delete(req, res) {
    const { id } = req.params;
    await usuarioService.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new UsuarioController();

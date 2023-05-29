const UsuarioService = require('../services/UsuarioService');
const usuarioService = new UsuarioService();

module.exports = {
  async registro(req, res) {
    const { name, email, password, role } = req.body;

    const usuario = await usuarioService.create({ name, email, password, role });

    return res.json(usuario);
  },

  async login(req, res) {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario || !(await usuario.checkPassword(password))) {
      return res.status(401).json({ message: 'Email ou senha inválidos' });
    }

    return res.json({ usuario, token: usuario.generateToken() });
  },
};

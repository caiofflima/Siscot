const UsuarioService = require("../services/UsuarioService");
const usuarioService = new UsuarioService();

module.exports = {
  async registro(req, res) {
    const { name, email, password, role } = req.body;

    const usuario = await usuarioService.create({
      name,
      email,
      password,
      role,
    });

    return res.json(usuario);
  },

  async login(req, res) {
    const { email, password } = req.body;

    const usuario = await usuarioService.findOne(email);

    if (!usuario || !(await usuario.checkPassword(password))) {
      return res.status(401).json({ message: "Email ou senha inválidos" });
    }

    const token = usuario.generateToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 86400,
    });

    return res.json({ usuario, token });
  },

  async logout(req, res) {
    res.clearCookie("token");

    return res.json({ message: "Logout realizado com sucesso" });
  },
};

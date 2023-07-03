const jwt = require('jsonwebtoken');
const { Usuario } = require('../db');

module.exports = async (req, res, next) => {

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    const payload = jwt.verify(token, 'secret');

    const usuario = await Usuario.findByPk(payload.id);

    if (!usuario) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    req.usuario = usuario;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

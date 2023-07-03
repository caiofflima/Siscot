const jwt = require('jsonwebtoken');
const { Usuario } = require('../db');

async function authenticateToken(req, res, next) {
  console.log(req.cookies.a);
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

function authorizeRole(role) {
  return (req, res, next) => {
    if (req.usuario.cargo !== role) {
      return res.status(403).json({ message: 'Usuário não autorizado' });
    }
    next();
  };
}

module.exports = { authenticateToken, authorizeRole };

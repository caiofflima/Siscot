module.exports = (roles) => (req, res, next) => {
    if (!roles.includes(req.usuario.funcao)) {
      return res.status(403).json({ message: 'Você não tem permissão para acessar este recurso' });
    }
  
    return next();
  };
  
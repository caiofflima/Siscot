const { Router } = require('express');
const pacienteRoutes = require('./routes/pacienteRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const historicoRoutes = require('./routes/historicoRoutes');
const acompanhamentoRoutes = require('./routes/acompanhamentoRoutes');
const agendaRoutes = require('./routes/agendaRoutes');
const loginController = require('./controllers/LoginController');
const { authenticateToken, authorizeRole } = require('./middlewares/auth');

const routes = Router();

routes.post('/login', loginController.login);
routes.post('/logout', authenticateToken, loginController.logout);

routes.use('/pacientes', authenticateToken, pacienteRoutes);
routes.use('/historicos', authenticateToken, historicoRoutes);
routes.use('/acompanhamentos', authenticateToken, acompanhamentoRoutes);
routes.use('/agendas', authenticateToken, agendaRoutes);

routes.use('/usuarios', authenticateToken, authorizeRole('ADMIN'), usuarioRoutes);

module.exports = routes;

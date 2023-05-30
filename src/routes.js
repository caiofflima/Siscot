const { Router } = require('express');
const pacienteRoutes = require('./routes/pacienteRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const historicoRoutes = require('./routes/historicoRoutes');
const acompanhamentoRoutes = require('./routes/acompanhamentoRoutes');
const agendaRoutes = require('./routes/agendaRoutes');
const loginRoutes = require('./routes/loginRoutes');

const routes = Router();

routes.use('/login', loginRoutes);
routes.use('/pacientes', pacienteRoutes);
routes.use('/usuarios', usuarioRoutes);
routes.use('/historicos', historicoRoutes);
routes.use('/acompanhamentos', acompanhamentoRoutes);
routes.use('/agendas', agendaRoutes);

module.exports = routes;

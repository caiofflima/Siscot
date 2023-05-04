const { Sequelize } = require('sequelize');

// Importe as configurações do banco de dados
const config = require('./config/database');

// Importe os modelos
const Paciente = require('./models/Paciente');
const Usuario = require('./models/Usuario');
const Historico = require('./models/Historico');
const Acompanhamento = require('./models/Acompanhamento');
const Agenda = require('./models/Agenda');

// Crie uma nova instância do Sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

// Inicialize os modelos
const models = [
  Paciente,
  Usuario,
  Historico,
  Acompanhamento,
  Agenda,
];

models.forEach((model) => model(sequelize));

// Associe os modelos (se houver relacionamentos)
Object.values(sequelize.models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(sequelize.models));

module.exports = sequelize;

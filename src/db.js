// db.js
const { Sequelize } = require("sequelize");
const config = require("./config/database");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Initialize models
db.Paciente = require("./models/Paciente")(sequelize);
db.Usuario = require("./models/Usuario")(sequelize);
db.Historico = require("./models/Historico")(sequelize);
db.Acompanhamento = require("./models/Acompanhamento")(sequelize);
db.Agenda = require("./models/Agenda")(sequelize);

// Associate models
for (const model of Object.values(db)) {
  if (model.associate) {
    model.associate(db);
  }
}

sequelize.sync({ force: false });

module.exports = db;

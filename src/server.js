const express = require('express');
const sequelize = require('./db');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

sequelize.sync({ force: false })
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
  });

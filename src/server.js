var cors = require("cors");
const express = require("express");
const { sequelize } = require("./db");
const routes = require("./routes");
const passport = require('passport');

const app = express();

app.use(passport.initialize());
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

const { Model, DataTypes } = require('sequelize');


  class Paciente extends Model {}
  module.exports = (sequelize) => {
  Paciente.init({
    nome: DataTypes.STRING,
    genero: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    informacoes: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Paciente',
  });


  return Paciente;
};

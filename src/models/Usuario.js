const { Model, DataTypes } = require('sequelize');


  class Usuario extends Model {}
  module.exports = (sequelize) => {
  Usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    funcao: DataTypes.ENUM('ADMIN', 'MEDICO', 'ENFERMEIRO'),
  }, {
    sequelize,
    modelName: 'Usuario',
  });


  return Usuario;
};

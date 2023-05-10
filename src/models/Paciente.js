const { Model } = require('sequelize');

class Paciente extends Model {}

module.exports = (sequelize) => {
  const DataTypes = sequelize.Sequelize;
  
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

  // Paciente.associate = (models) => {
  //   Paciente.hasMany(models.Acompanhamento, {
  //     foreignKey: 'pacienteId', // you should replace 'pacienteId' with the correct foreign key
  //     as: 'pacienteData',
  //   });
  // };

  return Paciente;
};

const { Model, DataTypes } = require('sequelize');

class Acompanhamento extends Model {}

module.exports = (sequelize) => {
  Acompanhamento.init(
    {
      pacienteId: DataTypes.INTEGER,
      profissionalId: DataTypes.INTEGER,
      data: DataTypes.DATE,
      anotacoes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Acompanhamento',
    }
  );

  Acompanhamento.associate = (models) => {
    Acompanhamento.belongsTo(models.Paciente, {
      foreignKey: 'pacienteId',
      as: 'pacienteData',
    });
    Acompanhamento.belongsTo(models.Usuario, {
      foreignKey: 'profissionalId',
      as: 'profissionalData',
    });
  };


  return Acompanhamento;
};

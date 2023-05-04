const { Model, DataTypes } = require('sequelize');

class Acompanhamento extends Model {}

module.exports = (sequelize) => {
  Acompanhamento.init(
    {
      paciente: DataTypes.INTEGER,
      profissional: DataTypes.INTEGER,
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
      foreignKey: 'paciente',
      as: 'pacienteData',
    });
    Acompanhamento.belongsTo(models.Usuario, {
      foreignKey: 'profissional',
      as: 'profissionalData',
    });
  };


  return Acompanhamento;
};

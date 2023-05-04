const { Model, DataTypes } = require('sequelize');

class Agenda extends Model {}

module.exports = (sequelize) => {
  Agenda.init({
    acompanhamento: DataTypes.INTEGER,
    data: DataTypes.DATE,
    descricao: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Agenda',
  });

  Agenda.associate = (models) => {
    Agenda.belongsTo(models.Acompanhamento, {
      foreignKey: 'acompanhamento',
    });
  };


  return Agenda;
};


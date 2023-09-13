const { Model, DataTypes } = require("sequelize");

class Acompanhamento extends Model {}

module.exports = (sequelize) => {
  Acompanhamento.init(
    {
      title: DataTypes.STRING,
      start: DataTypes.DATE,
      profissionalId: DataTypes.INTEGER,
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Acompanhamento",
    }
  );

  Acompanhamento.associate = (models) => {
    Acompanhamento.belongsToMany(models.Paciente, {
      through: "AcompanhamentoPaciente",
      foreignKey: "acompanhamentoId",
      as: "pacientes",
    });
    Acompanhamento.belongsTo(models.Usuario, {
      foreignKey: "profissionalId",
      as: "profissionalData",
    });
    models.Usuario.hasMany(models.Acompanhamento, {
      foreignKey: "profissionalId",
      onDelete: "CASCADE",
    });
  };

  return Acompanhamento;
};




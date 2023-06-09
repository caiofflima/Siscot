const { Model, DataTypes } = require("sequelize");

class Acompanhamento extends Model {}

module.exports = (sequelize) => {
  Acompanhamento.init(
    {
      title: DataTypes.STRING,
      start: DataTypes.DATE,
      pacienteId: DataTypes.INTEGER,
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
    Acompanhamento.belongsTo(models.Paciente, {
      foreignKey: "pacienteId",
      as: "pacienteData",
    });
    Acompanhamento.belongsTo(models.Usuario, {
      foreignKey: "profissionalId",
      as: "profissionalData",
    });
    models.Paciente.hasMany(models.Acompanhamento, {
      foreignKey: "pacienteId",
      onDelete: "CASCADE",
    });
    models.Usuario.hasMany(models.Acompanhamento, {
      foreignKey: "profissionalId",
      onDelete: "CASCADE",
    });
  };

  return Acompanhamento;
};




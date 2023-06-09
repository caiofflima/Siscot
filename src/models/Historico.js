const { Model, DataTypes } = require("sequelize");

class Historico extends Model {}
module.exports = (sequelize) => {
  Historico.init(
    {
      paciente: DataTypes.INTEGER,
      alergias: DataTypes.STRING,
      doencas_preexistentes: DataTypes.STRING,
      cirurgias_previas: DataTypes.STRING,
      medicamentos_uso: DataTypes.STRING,
      outros: DataTypes.STRING,
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Historico",
    }
  );

  Historico.associate = (models) => {
    Historico.belongsTo(models.Paciente, {
      foreignKey: "paciente",
      as: "pacienteData",
    });
    models.Paciente.hasMany(Historico, {
      foreignKey: "paciente",
      onDelete: "CASCADE",
    });
  };

  return Historico;
};

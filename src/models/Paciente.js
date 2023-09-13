const { Model, DataTypes } = require("sequelize");

class Paciente extends Model {}

module.exports = (sequelize) => {
  Paciente.init(
    {
      nome: DataTypes.STRING,
      genero: DataTypes.ENUM("MASCULINO", "FEMININO", "OUTRO"),
      data_nascimento: DataTypes.DATE,
      endereco: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      telefone: DataTypes.STRING,
      email: DataTypes.STRING,
      informacoes: DataTypes.STRING,
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Paciente",
    }
  );

  Paciente.associate = (models) => {
    Paciente.belongsToMany(models.Acompanhamento, {
      through: "AcompanhamentoPaciente",
      foreignKey: "pacienteId",
      as: "acompanhamentos",
    });
  };

  return Paciente;
};

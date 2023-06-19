const { Model } = require("sequelize");

class Paciente extends Model {}

module.exports = (sequelize) => {
  const DataTypes = sequelize.Sequelize;

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

  // Paciente.associate = (models) => {
  //   Paciente.hasMany(models.Acompanhamento, {
  //     foreignKey: 'pacienteId', // you should replace 'pacienteId' with the correct foreign key
  //     as: 'pacienteData',
  //   });
  // };

  return Paciente;
};

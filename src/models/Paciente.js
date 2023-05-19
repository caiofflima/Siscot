const { Model } = require("sequelize");

class Paciente extends Model {}

module.exports = (sequelize) => {
  const DataTypes = sequelize.Sequelize;

  Paciente.init(
    {
      name: DataTypes.STRING,
      gender: DataTypes.ENUM("MASCULINO", "FEMININO", "OUTRO"),
      date_birth: DataTypes.DATE,
      address: DataTypes.STRING,
      number: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      info: DataTypes.STRING,
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

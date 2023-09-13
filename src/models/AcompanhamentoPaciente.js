const { Model } = require("sequelize");

class AcompanhamentoPaciente extends Model {}

module.exports = (sequelize) => {
  AcompanhamentoPaciente.init({},
    {
      sequelize,
      modelName: "AcompanhamentoPaciente",
    }
  );

  return AcompanhamentoPaciente;
};

const { Acompanhamento, Paciente, Usuario } = require("../db");
const { Op } = require("sequelize");

class AcompanhamentoRepository {
  async findAll() {
    return Acompanhamento.findAll({
      where: {
        deleted: { [Op.not]: true },
      },
      include: [
        { model: Paciente, as: "pacientes" },
        { model: Usuario, as: "profissionalData" },
      ],
    });
  }

  async findById(id) {
    return Acompanhamento.findOne({
      where: { id },

      deleted: {
        [Op.not]: true,
      },
      include: ["pacienteData", "profissionalData"],
    });
  }

  async create(acompanhamento) {
    return Acompanhamento.create(acompanhamento);
  }

  async update(id, acompanhamento) {
    return Acompanhamento.update(acompanhamento, { where: { id } });
  }

  async delete(id) {
    return Acompanhamento.update({ deleted: true }, { where: { id } });
  }
}

module.exports = new AcompanhamentoRepository();

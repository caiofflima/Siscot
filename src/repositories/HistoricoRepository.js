const { Historico, Paciente } = require("../db");
const { Op } = require("sequelize");

class HistoricoRepository {
  async findAll() {
    return Historico.findAll({
      where: {
        deleted: { [Op.not]: true },
      },
      include: { model: Paciente, as: "pacienteData" },
    });
  }

  async findById(id) {
    return Historico.findByPk({
      where: { id },

      deleted: {
        [Op.not]: true,
      },
      include: ["pacienteData"],
    });
  }

  async create(historico) {
    return Historico.create(historico);
  }

  async update(id, historico) {
    return Historico.update(historico, { where: { id } });
  }

  async delete(id) {
    return Historico.update({ deleted: true }, { where: { id } });
  }
}

module.exports = new HistoricoRepository();

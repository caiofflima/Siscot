const { Agenda, Acompanhamento } = require("../db");
const { Op } = require("sequelize");

class AgendaRepository {
  async findAll() {
    return Agenda.findAll({
      where: {
        deleted: { [Op.not]: true },
      },
      include: {
        model: Acompanhamento,
        as: "acompanhamentoData",
      },
    });
  }

  async findById(id) {
    return Agenda.findByPk({
      where: { id },

      deleted: {
        [Op.not]: true,
      },
      include: ["acompanhamentoData"],
    });
  }

  async create(agenda) {
    return Agenda.create(agenda);
  }

  async update(id, agenda) {
    return Agenda.update(agenda, { where: { id } });
  }

  async delete(id) {
    return Agenda.update({ deleted: true }, { where: { id } });
  }
}

module.exports = new AgendaRepository();

const db = require('../db');
const { Historico } = require('../models/Historico')(db);

class HistoricoRepository {
  async findAll() {
    return Historico.findAll({ include: ['pacienteData'] });
  }

  async findById(id) {
    return Historico.findByPk(id, { include: ['pacienteData'] });
  }

  async create(historico) {
    return Historico.create(historico);
  }

  async update(id, historico) {
    return Historico.update(historico, { where: { id } });
  }

  async delete(id) {
    return Historico.destroy({ where: { id } });
  }
}

module.exports = HistoricoRepository;

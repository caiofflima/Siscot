const { Historico, Paciente } = require('../db');


class HistoricoRepository {
  async findAll() {
    return Historico.findAll({ include: { model: Paciente, as: 'pacienteData' } });
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

module.exports = new HistoricoRepository;

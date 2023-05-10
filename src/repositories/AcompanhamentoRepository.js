const db = require('../db');

class AcompanhamentoRepository {
  async findAll() {
    return Acompanhamento.findAll({ include: [{ model: Paciente, as: 'pacienteData' }, { model: Usuario, as: 'profissionalData' }]});
  }

  async findById(id) {
    return Acompanhamento.findByPk(id, { include: ['pacienteData', 'profissionalData'] });
  }

  async create(acompanhamento) {
    return Acompanhamento.create(acompanhamento);
  }

  async update(id, acompanhamento) {
    return Acompanhamento.update(acompanhamento, { where: { id } });
  }

  async delete(id) {
    return Acompanhamento.destroy({ where: { id } });
  }
}

module.exports = new AcompanhamentoRepository;

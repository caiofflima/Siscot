const db = require('../db');
const { Acompanhamento } = require('../models/Acompanhamento')(db);

class AcompanhamentoRepository {
  async findAll() {
    return Acompanhamento.findAll({ include: ['pacienteData', 'profissionalData'] });
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

module.exports = AcompanhamentoRepository;

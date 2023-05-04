const historicoRepository = require('../repositories/HistoricoRepository');

class HistoricoService {
  async findAll() {
    return historicoRepository.findAll();
  }

  async findById(id) {
    return historicoRepository.findById(id);
  }

  async create(historico) {
    return historicoRepository.create(historico);
  }

  async update(id, historico) {
    return historicoRepository.update(id, historico);
  }

  async delete(id) {
    return historicoRepository.delete(id);
  }
}

module.exports = HistoricoService;

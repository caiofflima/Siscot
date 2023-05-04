const acompanhamentoRepository = require('../repositories/AcompanhamentoRepository')

class AcompanhamentoService {
  async findAll() {
    return acompanhamentoRepository.findAll();
  }

  async findById(id) {
    return acompanhamentoRepository.findById(id);
  }

  async create(acompanhamento) {
    return acompanhamentoRepository.create(acompanhamento);
  }

  async update(id, acompanhamento) {
    return acompanhamentoRepository.update(id, acompanhamento);
  }

  async delete(id) {
    return acompanhamentoRepository.delete(id);
  }
}

module.exports = AcompanhamentoService;

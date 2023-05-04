const agendaRepository = require('../repositories/AgendaRepository');

class AgendaService {
  async findAll() {
    return agendaRepository.findAll();
  }

  async findById(id) {
    return agendaRepository.findById(id);
  }

  async create(agenda) {
    return agendaRepository.create(agenda);
  }

  async update(id, agenda) {
    return agendaRepository.update(id, agenda);
  }

  async delete(id) {
    return agendaRepository.delete(id);
  }
}

module.exports = AgendaService;

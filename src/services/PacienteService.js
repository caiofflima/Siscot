const pacienteRepository = require('../repositories/PacienteRepository');

class PacienteService {
  async findAll() {
    return pacienteRepository.findAll();
  }

  async findById(id) {
    return pacienteRepository.findById(id);
  }

  async create(paciente) {
    return pacienteRepository.create(paciente);
  }

  async update(id, paciente) {
    return pacienteRepository.update(id, paciente);
  }

  async delete(id) {
    return pacienteRepository.delete(id);
  }
}

module.exports = PacienteService;

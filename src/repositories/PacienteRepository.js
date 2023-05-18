const { Paciente } = require('../db');

class PacienteRepository {
  async findAll() {
    return Paciente.findAll();
  }

  async findById(id) {
    return Paciente.findByPk(id);
  }

  async create(paciente) {
    return Paciente.create(paciente);
  }

  async update(id, paciente) {
    return Paciente.update(paciente, { where: { id } });
  }

  async delete(id) {
    return Paciente.destroy({ where: { id } });
  }
}

module.exports = new PacienteRepository();

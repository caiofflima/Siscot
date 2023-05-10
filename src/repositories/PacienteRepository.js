const db = require('../db');

class PacienteRepository {
  async findAll() {
    return PacienteModel.findAll();
  }

  async findById(id) {
    return PacienteModel.findByPk(id);
  }

  async create(paciente) {
    return PacienteModel.create(paciente);
  }

  async update(id, paciente) {
    return PacienteModel.update(paciente, { where: { id } });
  }

  async delete(id) {
    return PacienteModel.destroy({ where: { id } });
  }
}

module.exports = new PacienteRepository();

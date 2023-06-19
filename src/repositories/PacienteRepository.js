const { Paciente } = require("../db");
const { Op } = require("sequelize");

class PacienteRepository {
  async findAll() {
    return Paciente.findAll({
      where: {
        deleted: { [Op.not]: true },
      },
    });
  }

  async findById(id) {
    return Paciente.findByPk({
      where: { id },

      deleted: {
        [Op.not]: true,
      },
    });
  }

  async create(paciente) {
    return Paciente.create(paciente);
  }

  async update(id, paciente) {
    return Paciente.update(paciente, { where: { id } });
  }

  async delete(id) {
    return Paciente.update({ deleted: true }, { where: { id } });
  }
}

module.exports = new PacienteRepository();

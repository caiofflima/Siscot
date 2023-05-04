const PacienteService = require('../services/PacienteService');
const pacienteService = new PacienteService();

class PacienteController {
  async index(req, res) {
    const pacientes = await pacienteService.findAll();
    res.json(pacientes);
  }

  async show(req, res) {
    const { id } = req.params;
    const paciente = await pacienteService.findById(id);
    res.json(paciente);
  }

  async store(req, res) {
    const paciente = await pacienteService.create(req.body);
    res.status(201).json(paciente);
  }

  async update(req, res) {
    const { id } = req.params;
    await pacienteService.update(id, req.body);
    res.sendStatus(204);
  }

  async delete(req, res) {
    const { id } = req.params;
    await pacienteService.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new PacienteController();

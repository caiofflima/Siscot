const AcompanhamentoService = require("../services/AcompanhamentoService");
const acompanhamentoService = new AcompanhamentoService();
const Paciente = require("../models/Paciente");

class AcompanhamentoController {
  async index(req, res) {
    const acompanhamentos = await acompanhamentoService.findAll({
      include: [
        {
          model: Paciente, // Certifique-se de importar o modelo Paciente no início do arquivo
          as: "pacientes", // O mesmo alias que você definiu na associação
        },
      ],
    });
    res.json(acompanhamentos);
  }

  async show(req, res) {
    const { id } = req.params;
    const acompanhamento = await acompanhamentoService.findById(id);
    res.json(acompanhamento);
  }

  async store(req, res) {
    const acompanhamento = await acompanhamentoService.create(req.body);
    res.status(201).json(acompanhamento);
  }

  async update(req, res) {
    const { id } = req.params;
    await acompanhamentoService.update(id, req.body);
    res.sendStatus(204);
  }

  async delete(req, res) {
    const { id } = req.params;
    await acompanhamentoService.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new AcompanhamentoController();

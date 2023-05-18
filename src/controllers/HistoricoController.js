const HistoricoService = require('../services/HistoricoService');
const historicoService = new HistoricoService();

class HistoricoController {
  async index(req, res) {
    const historicos = await historicoService.findAll();
    res.json(historicos);
  }

  async show(req, res) {
    const { id } = req.params;
    const historico = await historicoService.findById(id);
    res.json(historico);
  }

  async store(req, res) {
    const historico = await historicoService.create(req.body);
    res.status(201).json(historico);
  }

  async update(req, res) {
    const { id } = req.params;
    await historicoService.update(id, req.body);
    res.sendStatus(204);
  }

  async delete(req, res) {
    const { id } = req.params;
    await historicoService.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new HistoricoController();

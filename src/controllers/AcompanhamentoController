const AcompanhamentoService = require('../services/AcompanhamentoService');
const acompanhamentoService = new AcompanhamentoService();

class AcompanhamentoController {
  async index(req, res) {
    const acompanhamentos = await acompanhamentoService.findAll();
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

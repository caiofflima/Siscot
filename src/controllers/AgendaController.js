const AgendaService = require('../services/AgendaService');
const agendaService = new AgendaService();

class AgendaController {
  async index(req, res) {
    const agendas = await agendaService.findAll();
    res.json(agendas);
  }

  async show(req, res) {
    const { id } = req.params;
  const agenda = await agendaService.findById(id);
  res.json(agenda);
  }
  
  async store(req, res) {
  const agenda = await agendaService.create(req.body);
  res.status(201).json(agenda);
  }
  
  async update(req, res) {
  const { id } = req.params;
  await agendaService.update(id, req.body);
  res.sendStatus(204);
  }
  
  async delete(req, res) {
  const { id } = req.params;
  await agendaService.delete(id);
  res.sendStatus(204);
  }
  }
  
  module.exports = new AgendaController();
   

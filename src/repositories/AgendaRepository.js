const { Agenda, Acompanhamento } = require('../db');

class AgendaRepository {
  async findAll() {
    return Agenda.findAll({ 
      include: [
        { 
          model: Acompanhamento, 
          as: 'acompanhamentoData'}
      ] 
    });
  }

  async findById(id) {
    return Agenda.findByPk(id, { include: ['acompanhamentoData'] });
  }

  async create(agenda) {
    return Agenda.create(agenda);
  }

  async update(id, agenda) {
    return Agenda.update(agenda, { where: { id } });
  }

  async delete(id) {
    return Agenda.destroy({ where: { id } });
  }
}

module.exports = new AgendaRepository;
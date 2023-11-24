const acompanhamentoRepository = require("../repositories/AcompanhamentoRepository");
const Paciente = require("../models/Paciente");
const Acompanhamento = require("../models/Acompanhamento");

class AcompanhamentoService {
  async findAll() {
    return acompanhamentoRepository.findAll();
  }

  async findById(id) {
    return acompanhamentoRepository.findById(id);
  }

  async create(data) {
    console.log("----------------------------------------");
    console.log(Acompanhamento);
    console.log("----------------------------------------");
    try {
      const { pacienteId, ...acompanhamentoData } = data;

      // Cria o acompanhamento
      const acompanhamento = await Acompanhamento.create(acompanhamentoData);

      // Adiciona os pacientes associados ao acompanhamento
      if (pacienteId && pacienteId.length > 0) {
        const pacientes = await Paciente.findAll({ where: { id: pacienteId } });
        await acompanhamento.setPacientes(pacientes);
      }

      return acompanhamento;
    } catch (error) {
      throw error;
    }
  }

  async update(id, acompanhamento) {
    return acompanhamentoRepository.update(id, acompanhamento);
  }

  async delete(id) {
    return acompanhamentoRepository.delete(id);
  }
}

module.exports = AcompanhamentoService;

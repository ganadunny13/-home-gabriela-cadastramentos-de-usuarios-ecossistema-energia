const Auditoria = require('../models/Auditoria');

// Criar nova auditoria
exports.criarAuditoria = async (req, res) => {
  try {
    const novaAuditoria = new Auditoria(req.body);
    await novaAuditoria.save();
    res.status(201).json(novaAuditoria);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao criar auditoria', erro: error.message });
  }
};

// Obter todas as auditorias
exports.obterAuditorias = async (req, res) => {
  try {
    const auditorias = await Auditoria.find().sort({ dataHora: -1 });
    res.status(200).json(auditorias);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter auditorias', erro: error.message });
  }
};

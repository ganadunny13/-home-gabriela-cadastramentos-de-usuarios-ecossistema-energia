// backend/routes/ajuda.js
const express = require('express');
const router = express.Router();
const Ajuda = require('../models/Ajuda');

router.post('/', async (req, res) => {
  const { nome, email, mensagem } = req.body;
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  try {
    await Ajuda.create({ nome, email, mensagem });
    res.status(201).json({ mensagem: 'Mensagem registrada com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar ajuda:', error);
    res.status(500).json({ mensagem: 'Erro ao processar a solicitação.' });
  }
});
// backend/models/Ajuda.js
const mongoose = require('mongoose');

const AjudaSchema = new mongoose.Schema({
  nome: String,
  email: String,
  mensagem: String,
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ajuda', AjudaSchema);


module.exports = router;

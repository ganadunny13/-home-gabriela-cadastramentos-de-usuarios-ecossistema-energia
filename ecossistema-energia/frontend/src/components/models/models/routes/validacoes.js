// routes/validacoes.js
const express = require('express');
const router = express.Router();
const Validacao = require('../models/Validacao');

// Criar nova validação
router.post('/', async (req, res) => {
  try {
    const validacao = new Validacao(req.body);
    await validacao.save();
    res.status(201).json({ mensagem: 'Validação salva com sucesso!' });
  } catch (error) {
    console.error('❌ Erro ao salvar validação:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }
});

// Listar todas as validações
router.get('/', async (req, res) => {
  try {
    const validacoes = await Validacao.find().sort({ data: -1 });
    res.json(validacoes);
  } catch (error) {
    console.error('❌ Erro ao buscar validações:', error);
    res.status(500).json({ mensagem: 'Erro ao buscar registros.' });
  }
});

module.exports = router;

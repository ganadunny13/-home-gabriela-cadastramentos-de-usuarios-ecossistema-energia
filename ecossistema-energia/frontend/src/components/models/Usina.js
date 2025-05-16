const express = require('express');
const router = express.Router();
const Usina = require('../models/Usina');

router.post('/', async (req, res) => {
  const { nome, localizacao, status, responsavel } = req.body;

  if (!nome || !localizacao || !status || !responsavel) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  try {
    const novaUsina = new Usina({ nome, localizacao, status, responsavel });
    await novaUsina.save();
    res.status(201).json({ mensagem: 'Usina cadastrada com sucesso!' });
  } catch (err) {
    console.error('Erro ao salvar usina:', err);
    res.status(500).json({ mensagem: 'Erro ao cadastrar usina.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const usinas = await Usina.find();
    res.json(usinas);
  } catch (err) {
    console.error('Erro ao buscar usinas:', err);
    res.status(500).json({ mensagem: 'Erro ao listar usinas.' });
  }
});

module.exports = router;

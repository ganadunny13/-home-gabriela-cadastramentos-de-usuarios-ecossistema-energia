// routes/ajuda.js

const express = require('express');
const router = express.Router();
const axios = require('axios');
const mongoose = require('mongoose');

// Modelo da Ajuda
const AjudaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  mensagem: { type: String, required: true },
  data: { type: Date, default: Date.now }
});

const Ajuda = mongoose.model('Ajuda', AjudaSchema);
// Middleware para verificar se o usuário está autenticado (opcional)

const authMiddleware = require('../middlewares/auth');
router.use(authMiddleware);

// POST /api/ajuda - Recebe mensagem de suporte
router.post('/', async (req, res) => {
  const { nome, email, mensagem } = req.body;
  // Valida os campos obrigatórios

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  try {
    const novaAjuda = new Ajuda({ nome, email, mensagem });
    await novaAjuda.save();

    // Envia para o Slack (caso webhook esteja configurado)
    const webhookSlack = process.env.SLACK_WEBHOOK;
    if (webhookSlack) {
      await axios.post(webhookSlack, {
        text: `💬 *Nova mensagem de ajuda:*\n👤 *${nome}*\n📧 ${email}\n📝 ${mensagem}`
      });
    }

    res.status(201).json({ mensagem: 'Mensagem registrada e enviada ao suporte!' });
  } catch (error) {
    console.error('❌ Erro na rota /ajuda:', error);
    res.status(500).json({ mensagem: 'Erro ao processar a solicitação.' });
  }
});

// GET /api/ajuda - Lista todas as mensagens (opcional)
router.get('/', async (req, res) => {
  try {
    const mensagens = await Ajuda.find().sort({ data: -1 });
    res.json(mensagens);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar mensagens.' });
  }
});

module.exports = router;

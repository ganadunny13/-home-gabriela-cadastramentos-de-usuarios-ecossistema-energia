const express = require('express');
const router = express.Router();
const multer = require('multer');
const Usuario = require('../models/Usuario');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.any(), async (req, res) => {
  try {
    const dados = req.body;
    const arquivos = req.files.map(file => ({
      filename: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    }));

    const usuarioCompleto = new Usuario({
      ...dados,
      arquivos,
      dataCadastro: new Date()
    });

    await usuarioCompleto.save();
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('❌ Erro ao salvar usuário:', error);
    res.status(500).json({ mensagem: 'Erro no servidor.' });
  }
});

module.exports = router;

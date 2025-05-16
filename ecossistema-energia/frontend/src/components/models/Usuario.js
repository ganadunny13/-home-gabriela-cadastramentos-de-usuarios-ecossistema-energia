// routes/cadastroUsuario.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

const upload = multer({ storage: multer.memoryStorage() });

// Rota de cadastro de usuário
router.post('/cadastro', upload.any(), async (req, res) => {
  try {
    const {
      nomeCompleto,
      email,
      senha,
      telefone,
      endereco,
      tipoUsuario,
      dataNascimento,
      cpf
    } = req.body;

    if (!nomeCompleto || !email || !senha) {
      return res.status(400).json({ error: 'Nome, e-mail e senha são obrigatórios.' });
    }

    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    const arquivos = req.files.map(file => ({
      filename: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    }));

    const novoUsuario = new Usuario({
      nome: nomeCompleto,
      email,
      senha: senhaCriptografada,
      telefone,
      endereco,
      tipoUsuario,
      dataNascimento,
      cpf,
      arquivos,
      dataCadastro: new Date()
    });

    const usuarioSalvo = await novoUsuario.save();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', usuario: usuarioSalvo });

  } catch (error) {
    console.error('❌ Erro ao cadastrar usuário:', error);
    res.status(500).json({ error: 'Erro ao cadastrar usuário. Tente novamente.' });
  }
});

module.exports = router;

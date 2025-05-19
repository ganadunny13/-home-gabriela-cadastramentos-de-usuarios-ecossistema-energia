const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexão com MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ecossistemaEnergia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB conectado'))
.catch((err) => console.error('❌ Erro ao conectar MongoDB:', err));

// Rotas
const ajudaRouter = require('./routes/ajuda');
app.use('/api/ajuda', ajudaRouter);

// Rota padrão
app.get('/', (req, res) => {
  res.send('API do Ecossistema está no ar!');
});

// Start do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

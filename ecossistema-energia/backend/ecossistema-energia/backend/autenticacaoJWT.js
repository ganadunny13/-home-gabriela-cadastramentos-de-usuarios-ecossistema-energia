const jwt = require('jsonwebtoken');

function autenticacaoJWT(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ mensagem: 'Token de autenticação ausente.' });
  }

  try {
    const tokenFormatado = token.replace('Bearer ', '');
    const decoded = jwt.verify(tokenFormatado, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ mensagem: 'Token inválido ou expirado.' });
  }
}

module.exports = autenticacaoJWT;
// Compare this snippet from ecossistema-energia/backend/serve.js:
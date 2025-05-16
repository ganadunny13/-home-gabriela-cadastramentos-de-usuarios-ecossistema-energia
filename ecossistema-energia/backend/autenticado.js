// middlewares/autenticacaoSimples.js

function autenticacaoSimples(req, res, next) {
  // Recupera o token do header Authorization
  const token = req.headers['authorization'];

  // Verifica se o token foi enviado
  if (!token) {
    return res.status(401).json({ mensagem: 'Token de autenticação ausente.' });
  }

  // Simula verificação do token (exemplo simples, sem JWT real)
  if (token === 'secreto123') {
    // Autorizado, segue para a próxima função ou rota
    return next();
  } else {
    // Token inválido
    return res.status(403).json({ mensagem: 'Token inválido ou expirado.' });
  }
}

module.exports = autenticacaoSimples;

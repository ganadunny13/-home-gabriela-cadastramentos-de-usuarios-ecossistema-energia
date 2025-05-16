import React, { useState } from 'react';
import axios from 'axios';

export default function Ajuda() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposta = await axios.post('http://localhost:5000/api/ajuda', form);
      setMensagem(resposta.data.mensagem);
      setForm({ nome: '', email: '', mensagem: '' });
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao enviar mensagem.');
    }
  };

  return (
    <div className="container">
      <h2>Ajuda</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Mensagem" required />
        <button type="submit">Enviar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

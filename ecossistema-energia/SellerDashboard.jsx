// src/components/SellerDashboard.jsx
import React from 'react';
import mockClients from '../data/mockClients';

export default function SellerDashboard() {
  return (
    <div className="p-6 bg-white rounded shadow w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Painel da Vendedora</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nome</th>
            <th className="p-2 border">Usina</th>
            <th className="p-2 border">Localização</th>
            <th className="p-2 border">Economia (R$)</th>
          </tr>
        </thead>
        <tbody>
          {mockClients.map((client, index) => {
            const economia = (client.gastoAnterior - client.gastoAtual).toFixed(2);
            return (
              <tr key={index} className="text-center">
                <td className="p-2 border">{client.nome}</td>
                <td className="p-2 border">{client.usina}</td>
                <td className="p-2 border">{client.localizacao}</td>
                <td className="p-2 border text-green-600 font-semibold">R$ {economia}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

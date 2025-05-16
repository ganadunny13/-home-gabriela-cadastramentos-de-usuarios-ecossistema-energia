import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserPlus, FaUsers, FaBolt, FaBuilding, FaFileInvoice, FaQuestionCircle } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="bg-light border-end" id="sidebar-wrapper">
      <div className="sidebar-heading text-primary fw-bold px-3 pt-4">⚡ Ecossistema</div>
      <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item list-group-item-action bg-light">
          <FaHome className="me-2" /> Dashboard
        </Link>
        <Link to="/cadastro" className="list-group-item list-group-item-action bg-light">
          <FaUserPlus className="me-2" /> Novo Cadastro
        </Link>
        <Link to="/usuarios" className="list-group-item list-group-item-action bg-light">
          <FaUsers className="me-2" /> Usuários
        </Link>
        <Link to="/consumo" className="list-group-item list-group-item-action bg-light">
          <FaBolt className="me-2" /> Consumo
        </Link>
        <Link to="/usinas" className="list-group-item list-group-item-action bg-light">
          <FaBuilding className="me-2" /> Usinas
        </Link>
        <Link to="/faturas" className="list-group-item list-group-item-action bg-light">
          <FaFileInvoice className="me-2" /> Faturas
        </Link>
        <Link to="/ajuda" className="list-group-item list-group-item-action bg-light">
          <FaQuestionCircle className="me-2" /> Ajuda
        </Link>
      </div>
    </div>
  );
}

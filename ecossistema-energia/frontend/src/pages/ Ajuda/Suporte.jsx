// src/pages/Ajuda.jsx
import React from 'react';

export default function Ajuda() {
  const faqs = [
    {
      pergunta: 'Como posso visualizar minhas faturas?',
      resposta: 'Acesse a seção "Histórico de Faturas" no menu principal para visualizar e baixar suas faturas.',
    },
    {
      pergunta: 'Como posso atualizar meus dados pessoais?',
      resposta: 'Vá até a seção "Perfil do Usuário" e clique em "Editar" para modificar suas informações.',
    },
    // Adicione mais perguntas frequentes conforme necessário
  ];

  return (
    <div className="container-fluid">
      <h2 className="mb-4 text-primary">Ajuda e Suporte</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.pergunta}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.resposta}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h5>Precisa de mais ajuda?</h5>
        <p>
          Entre em contato conosco pelo WhatsApp:
          <a
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success ms-2"
          >
            Falar com o Suporte
          </a>
        </p>
      </div>
    </div>
  );
}

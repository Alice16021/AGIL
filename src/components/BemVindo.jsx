import React from 'react';

export default function BemVindo({
  titulo = "Bem-Vindo ao Sistema de Estoque",
  subtitulo = "Gerencie seus produtos e acompanhe o consumo em tempo real.",
}) {
  return (
    <div
      className="p-4 p-md-5 rounded-4 mb-4 text-white shadow-sm"
      style={{ background: 'linear-gradient(90deg, #0b7051 0%, #40b094 100%)' }}
    >
      <h1 className="fw-bold display-6 mb-2">{titulo}</h1>
      <p className="mb-0 fs-5 opacity-75">{subtitulo}</p>
    </div>
  );
}
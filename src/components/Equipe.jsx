import React from 'react';
import { MoreHorizontal, ChevronRight } from 'lucide-react';

const membrosPadrao = [
  {
    nome: "Pedro",
    cargo: "Gerente",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    nome: "Ana Carolina",
    cargo: "Técnica",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    nome: "Luiza",
    cargo: "Enfermeira Chefe",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nome: "José",
    cargo: "Auxiliar",
    foto: "https://randomuser.me/api/portraits/men/86.jpg",
  },
];

export default function Equipe({ membros = membrosPadrao, onVerTodos }) {
  return (
    <div>
      {/* Banner Superior do Card de Equipe */}
      <div className="colaborators-card mb-3">
        <div className="d-flex justify-content-between align-items-center m-0 p-2 fw-bold text-white">
          <h5 className="m-0 fw-bold fs-5">Equipe</h5>
          <button
            type="button"
            onClick={onVerTodos}
            aria-label="Mais opções"
            className="btn p-0 text-white border-0 bg-transparent"
          >
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>

      {/* Lista de Membros */}
      <div className="bg-white p-4 rounded-4 shadow-sm">
        <div className="colaborator-list">
          {membros.map((membro) => (
            <div
              key={membro.nome}
              className="d-flex align-items-center justify-content-between py-3 border-bottom item-colaborador"
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={membro.foto}
                  alt={membro.nome}
                  className="rounded-circle"
                  width="45"
                  height="45"
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <h6 className="m-0 fw-bold text-dark">{membro.nome}</h6>
                  <small className="text-muted">{membro.cargo}</small>
                </div>
              </div>
              <ChevronRight size={18} className="text-muted" />
            </div>
          ))}
        </div>

        <div className="text-center mt-3 pt-2">
          <button
            type="button"
            onClick={onVerTodos}
            className="btn btn-link text-success fw-bold text-decoration-none p-0 small"
          >
            Ver todos
          </button>
        </div>
      </div>
    </div>
  );
}
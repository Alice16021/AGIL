import React from "react";
import { MoreHorizontal, ChevronRight } from "lucide-react";
import "./Equipe.css";

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
    <div className="equipe">
      <div className="equipe__cabecalho">
        <span className="equipe__titulo">Equipe</span>
        <button
          onClick={onVerTodos}
          aria-label="Mais opções"
          className="equipe__botao-opcoes"
        >
          <MoreHorizontal size={20} />
        </button>
      </div>

      <ul className="equipe__lista">
        {membros.map((membro) => (
          <li key={membro.nome} className="equipe__item">
            <button className="equipe__membro">
              <div className="equipe__info">
                <img
                  src={membro.foto}
                  alt={membro.nome}
                  className="equipe__foto"
                />
                <div>
                  <p className="equipe__nome">{membro.nome}</p>
                  <p className="equipe__cargo">{membro.cargo}</p>
                </div>
              </div>
              <ChevronRight size={18} className="equipe__seta" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

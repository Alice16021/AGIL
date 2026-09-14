import React from "react";
import "./BemVindo.css";

export default function BemVindo({
  titulo = "Bem-Vindo ao Sistema de Estoque",
  subtitulo = "Gerencie seus produtos e acompanhe o consumo em tempo real.",
}) {
  return (
    <div className="bemvindo">
      <h1 className="bemvindo__titulo">{titulo}</h1>
      <p className="bemvindo__subtitulo">{subtitulo}</p>
    </div>
  );
}

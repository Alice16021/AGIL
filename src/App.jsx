import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Produtos from './pages/Produtos';
import Historico from './pages/Historico';
import Notificacoes from './pages/Notificacoes';
import Funcionarios from './pages/Funcionarios';
import Ajuda from './pages/Ajuda';
import Home from './pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Rota padrão: redireciona para o Início logo que abre o site */}
        <Route path="/" element={<Navigate to="/produtos" replace />} />
        <Route path="/Home" element={<Home />} />

        {/*
        <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/inicio" element={<Inicio />} />
        */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/ajuda" element={<Ajuda />} />
      </Routes>
    </Router>
  );
};

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import PaginaInicial from './pages/PaginaInicial';
import Produtos from './pages/Produtos';
import Historico from './pages/Historico';
import Notificacoes from './pages/Notificacoes';
import Funcionarios from './pages/Funcionarios';
import Ajuda from './pages/Ajuda';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Pública */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Autenticação */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Dashboard e Tela Inicial do Gestor */}
        <Route path="/inicio-gestor" element={<PaginaInicial />} />
        <Route path="/inicio" element={<PaginaInicial />} />

        {/* Funcionalidades */}
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/ajuda" element={<Ajuda />} />
      </Routes>
    </Router>
  );
}

export default App;
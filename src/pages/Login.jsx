import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo_semfundo.png';
import loginImg from '../assets/Login.png';
import '../styles/log.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login efetuado:', { email, password });
    
    // Redireciona após o login
    navigate('/inicio-gestor');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        {/* Lado Esquerdo - Formulário */}
        <div className="login-form">
          <img 
            src={logo} 
            alt="Logo Ágil" 
            style={{ maxWidth: '80px', marginBottom: '10px' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <h2>Bem-vindo!</h2>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p style={{ width: '100%', textAlign: 'left', marginTop: '-5px', marginBottom: '15px' }}>
              <Link to="/esqueceu-senha" style={{ color: '#4a5568', fontSize: '13px' }}>
                Esqueceu a senha?
              </Link>
            </p>

            <button type="submit" className="btn-login">
              Entrar
            </button>

            <Link to="/cadastro" className="btn-login1">
              <i className="bi bi-globe2 me-2"></i> Cadastre-se
            </Link>
          </form>
        </div>

        {/* Lado Direito - Ilustração */}
        <div className="login-image">
          <img src={loginImg} alt="Ilustração Login" />
        </div>

      </div>
    </div>
  );
}
import { useState } from 'react';
import './Login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login efetuado:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        {/* Formulário (Lado Esquerdo) */}
        <form onSubmit={handleSubmit} className="login-form">
          <img 
            src="/Logo_semfundo.png" 
            alt="Logo Ágil" 
            style={{ width: '60px', marginBottom: '10px' }} 
          />
          <h2>Bem-vindo!</h2>

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

          <button type="submit" className="btn-login">
            Entrar
          </button>

          <button type="button" className="btn-login1">
            Cadastre-se
          </button>
        </form>

        {/* Ilustração (Lado Direito) */}
        <div className="login-image">
          <img src="/Login.png" alt="Ilustração" />
        </div>

      </div>
    </div>
  );
}

export default Login;
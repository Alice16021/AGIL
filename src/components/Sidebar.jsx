import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Sidebar({ active }) {
    return (
        <div className="sidebar position-relative d-md-block">
            <div className="logo mb-4 ps-3">
                <Link to="/inicio" className="d-flex align-items-center text-decoration-none">
                    <img src={logo} alt="Logo" width="40" />
                    <span className="ms-2 fw-bold text-success fs-5 d-none d-md-inline">AGIL</span>
                </Link>
            </div>

            <ul className="nav flex-column">
                <li>
                    <Link to="/inicio" className={`nav-link ${active === 'inicio' ? 'active' : ''}`}>
                        <i className="bi bi-grid"></i> <span className="d-none d-lg-inline">Início</span>
                    </Link>
                </li>
                <li>
                    <Link to="/produtos" className={`nav-link ${active === 'produtos' ? 'active' : ''}`}>
                        <i className="bi bi-box"></i> <span className="d-none d-lg-inline">Produtos</span>
                    </Link>
                </li>
                <li>
                    <Link to="/historico" className={`nav-link ${active === 'historico' ? 'active' : ''}`}>
                        <i className="bi bi-file-earmark"></i> <span className="d-none d-lg-inline">Histórico</span>
                    </Link>
                </li>
                <li>
                    <Link to="/notificacoes" className={`nav-link ${active === 'notificacoes' ? 'active' : ''}`}>
                        <i className="bi bi-bell"></i> <span className="d-none d-lg-inline">Notificação</span>
                    </Link>
                </li>
                <li>
                    <Link to="/funcionarios" className={`nav-link ${active === 'funcionarios' ? 'active' : ''}`}>
                        <i className="bi bi-people"></i> <span className="d-none d-lg-inline">Funcionários</span>
                    </Link>
                </li>
                <li className="mt-md-auto pt-md-3 border-top d-none d-md-block"></li>
                <li>
                    <Link to="/ajuda" className={`nav-link ${active === 'ajuda' ? 'active' : ''}`}>
                        <i className="bi bi-question-circle"></i> <span className="d-none d-lg-inline">Ajuda</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
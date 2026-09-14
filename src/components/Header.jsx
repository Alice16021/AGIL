import React from 'react';
import claudiaImg from '../assets/claudia_alves.png';

export default function Header() {
    return (
        <div className="header d-flex align-items-center justify-content-between">
            <div className="search-box w-50 position-relative">
                <input type="text" className="form-control rounded-pill ps-4 pe-5" placeholder="Buscar" />
                <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3"></i>
            </div>

            <div className="user d-flex align-items-center gap-2">
                <span className="fw-medium">Claudia Alves</span>
                <img src={claudiaImg} className="rounded-circle" width="35" alt="Usuário" />
            </div>
        </div>
    );
}
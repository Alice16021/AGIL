import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/estilo.css';

export default function Notificacoes() {
    const listaNotificacoes = [
        { id: 1, titulo: 'Estoque Crítico', desc: 'O item Luvas Descartáveis (P) está com apenas 12 unidades disponíveis.', cor: 'bg-danger' },
        { id: 2, titulo: 'Estoque Baixo', desc: 'Seringas 5ml atingiram o limite mínimo (25 unidades restantes).', cor: 'bg-danger' },
        { id: 3, titulo: 'Solicitações de recuperação de senha', desc: 'Vendedor Felipe está solicitando uma recuperação de senha!', cor: 'bg-danger' },
        { id: 4, titulo: 'Novo Pedido Registrado', desc: 'Pedido #4587 de Máscaras Cirúrgicas registrado com sucesso.', cor: 'bg-success' },
        { id: 5, titulo: 'Entrada de Estoque', desc: 'Foram adicionadas 200 unidades de Compressas de Gaze.', cor: 'bg-warning' }
    ];

    return (
        <div className="min-vh-100 d-flex flex-column">
            <div className="d-flex flex-column flex-md-row p-3 gap-3 flex-grow-1">
                
                <Sidebar active="notificacao" />

                <div className="flex-grow-1 w-100">
                    <Header />

                    <div className="notificacao_banner d-flex justify-content-between align-items-center mb-3 shadow-sm mt-3">
                        <h4 className="fw-bold mb-0 p-2">Notificações</h4>
                        <i className="bi bi-bell-fill fs-4"></i>
                    </div>

                    <div className="bg-white rounded-4 shadow-sm overflow-hidden mb-5">
                        {listaNotificacoes.map((item, index) => (
                            <div 
                                key={item.id} 
                                className={`p-4 item-notificacao ${index !== listaNotificacoes.length - 1 ? 'border-bottom' : ''}`}
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="fw-bold mb-1" style={{ color: '#334155' }}>{item.titulo}</h6>
                                        <p className="text-muted small mb-0">{item.desc}</p>
                                    </div>
                                    <div className={`dot ${item.cor}`} style={{ width: '10px', height: '10px', borderRadius: '50%' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
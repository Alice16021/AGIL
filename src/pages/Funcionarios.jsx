import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Importando as imagens da pasta assets
import imgPedro from '../assets/pedro.avif';
import imgPaulo from '../assets/Paulo.avif';
import imgAna from '../assets/Ana.webp';
import imgMaria from '../assets/maria.jpg';
import imgFelipe from '../assets/Felipe.avif';
import imgMarina from '../assets/Marina.jpg';
import imgBruno from '../assets/Bruno.png';

export default function Funcionarios() {

    // Lista dinâmica com as variáveis das imagens importadas
    const listaFuncionarios = [
        { id: 'func-pedro', nome: 'Pedro', cargo: 'Auxiliar Administrativo', img: imgPedro },
        { id: 'func-paulo', nome: 'Paulo', cargo: 'Assistente de vendas', img: imgPaulo },
        { id: 'func-ana', nome: 'Ana', cargo: 'Auxiliar Técnica', img: imgAna },
        { id: 'func-maria', nome: 'Maria', cargo: 'Assistente de produção', img: imgMaria },
        { id: 'func-felipe', nome: 'Felipe', cargo: 'Vendedor', img: imgFelipe },
        { id: 'func-marina', nome: 'Marina', cargo: 'Recursos Humanos', img: imgMarina },
        { id: 'func-bruno', nome: 'Bruno', cargo: 'Assistente de Estoque', img: imgBruno }
    ];

    return (
        <div className="min-vh-100 d-flex flex-column">
            <div className="d-flex flex-column flex-md-row p-3 gap-3 flex-grow-1">
                
                <Sidebar active="funcionarios" />

                <div className="flex-grow-1 w-100">
                    
                    <Header />

                    <div className="colaborators-card mb-3">
                        <h4 className="d-flex justify-content-between align-items-center fw-bold mb-0 p-2">
                            Colaboradores
                            <div className="d-flex gap-3 fs-5">
                                <i className="bi bi-pencil-square" style={{ cursor: 'pointer' }} title="Editar"></i>
                                <i className="bi bi-x-square" style={{ cursor: 'pointer' }} title="Excluir"></i>
                                <i className="bi bi-plus-square" style={{ cursor: 'pointer' }} title="Adicionar"></i>
                            </div>
                        </h4>
                    </div>

                    <div className="bg-white p-4 rounded-4 shadow-sm mt-4">
                        <div className="colaborator-list">
                            
                            {listaFuncionarios.map((func) => (
                                <div key={func.id} id={func.id} className="d-flex align-items-center justify-content-between py-3 border-bottom item-colaborador">
                                    <div className="d-flex align-items-center gap-3">
                                        <img 
                                            src={func.img} 
                                            alt={`Foto de ${func.nome}`} 
                                            className="rounded-circle object-fit-cover" 
                                            width="50" 
                                            height="50" 
                                        />
                                        <div>
                                            <h6 className="m-0 fw-bold">{func.nome}</h6>
                                            <small className="text-muted">{func.cargo}</small>
                                        </div>
                                    </div>
                                    <i className="bi bi-chevron-right text-muted"></i>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
            
        </div>
    );
}
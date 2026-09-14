import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TableCard from '../components/TableCard';
import Footer from '../components/Footer';
import '../styles/produtos.css';

// Importação das Imagens da pasta assets
import luvasImg from '../assets/luvas.jpg';
import seringaImg from '../assets/seringa.jpg';
import mascaraImg from '../assets/mascara.jpg';

export default function Produtos() {

    // Definindo as colunas específicas da página de Produtos
    const colunasProdutos = (
        <>
            <div className="col-md-6">Produto</div>
            <div className="col-md-3">Preço</div>
            <div className="col-md-3">Estoque</div>
        </>
    );

    // Definindo as ações específicas da página de Produtos
    const acoesProdutos = (
        <>
            <i className="bi bi-pencil-fill" style={{ cursor: 'pointer' }} title="Editar Produtos"></i>
            <i className="bi bi-x-square-fill" style={{ cursor: 'pointer' }} title="Remover Produtos"></i>
            <i className="bi bi-plus-circle" style={{ cursor: 'pointer' }} title="Adicionar Produtos"></i>
        </>
    );

    return (
        <div className="min-vh-100 d-flex flex-column">
            <div className="d-flex flex-column flex-md-row p-3 gap-3 flex-grow-1">

                {/* Sidebar com a página 'produtos' ativa */}
                <Sidebar active="produtos" />

                <div className="flex-grow-1 w-100">

                    <Header />

                    {/* Componente TableCard recebendo as props */}
                    <TableCard colunas={colunasProdutos} acoes={acoesProdutos}>

                        {/* Linha 1: Luvas Cirúrgicas */}
                        <div className="row align-items-center p-3 border-bottom m-0">
                            <div className="col-12 col-md-6 d-flex align-items-center gap-3 mb-2 mb-md-0">
                                <img src={luvasImg} className="rounded shadow-sm" width="45" height="45"
                                    style={{ objectFit: 'cover' }} alt="Luvas Cirúrgicas" />
                                <div>
                                    <h6 className="mb-0 fw-bold text-dark">Luvas Cirúrgicas</h6>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <h6 className="mb-0 fw-bold">R$ 89,90</h6>
                                <small className="text-secondary">Caixa com 100</small>
                            </div>
                            <div className="col-6 col-md-3 text-success fw-medium text-end text-md-start">
                                <i className="bi bi-circle-fill small me-1"></i>
                                <span className="d-none d-sm-inline">Presente no estoque</span>
                                <span className="d-inline d-sm-none">Em estoque</span>
                            </div>
                        </div>

                        {/* Linha 2: Seringa Descartável */}
                        <div className="row align-items-center p-3 border-bottom m-0">
                            <div className="col-12 col-md-6 d-flex align-items-center gap-3 mb-2 mb-md-0">
                                <img src={seringaImg} className="rounded shadow-sm" width="45" height="45"
                                    style={{ objectFit: 'cover' }} alt="Seringa Descartável" />
                                <div>
                                    <h6 className="mb-0 fw-bold text-dark">Seringa Descartável</h6>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <h6 className="mb-0 fw-bold">R$ 45,50</h6>
                                <small className="text-secondary">Pacote com 50</small>
                            </div>
                            <div className="col-6 col-md-3 text-success fw-medium text-end text-md-start">
                                <i className="bi bi-circle-fill small me-1"></i>
                                <span className="d-none d-sm-inline">Presente no estoque</span>
                                <span className="d-inline d-sm-none">Em estoque</span>
                            </div>
                        </div>

                        {/* Linha 3: Máscara Cirúrgica */}
                        <div className="row align-items-center p-3 m-0">
                            <div className="col-12 col-md-6 d-flex align-items-center gap-3 mb-2 mb-md-0">
                                <img src={mascaraImg} className="rounded shadow-sm" width="45" height="45"
                                    style={{ objectFit: 'cover' }} alt="Máscara Cirúrgica" />
                                <div>
                                    <h6 className="mb-0 fw-bold text-dark">Máscara Cirúrgica</h6>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <h6 className="mb-0 fw-bold">R$ 32,00</h6>
                                <small className="text-secondary">Caixa com 50</small>
                            </div>
                            <div className="col-6 col-md-3 text-success fw-medium text-end text-md-start">
                                <i className="bi bi-circle-fill small me-1"></i>
                                <span className="d-none d-sm-inline">Presente no estoque</span>
                                <span className="d-inline d-sm-none">Em estoque</span>
                            </div>
                        </div>

                    </TableCard>

                </div>
            </div>

            <Footer />

        </div>
    );
}
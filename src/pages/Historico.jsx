import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TableCard from '../components/TableCard';
import Footer from '../components/Footer';

import '../styles/produtos.css';

export default function Historico() {

    const colunasHistorico = (
        <>
            <div className="col-md-4">Produto</div>
            <div className="col-md-3">Tipo</div>
            <div className="col-md-2 text-center">Quantidade</div>
            <div className="col-md-3 text-end">Data</div>
        </>
    );

    const acoesHistorico = (
        <>
            <i className="bi bi-filter" style={{ cursor: 'pointer' }} title="Filtrar"></i>
            <i className="bi bi-download" style={{ cursor: 'pointer' }} title="Exportar Relatório"></i>
        </>
    );

    return (
        <div className="min-vh-100 d-flex flex-column">
            <div className="d-flex flex-column flex-md-row p-3 gap-3 flex-grow-1">

                <Sidebar active="historico" />

                <div className="flex-grow-1 w-100">

                    <Header />

                    <TableCard colunas={colunasHistorico} acoes={acoesHistorico}>

                        <div className="row align-items-center p-3 border-bottom m-0">
                            <div className="col-12 col-md-4 mb-2 mb-md-0">
                                <h6 className="mb-0 fw-bold text-dark">Seringa Descartável</h6>
                            </div>
                            <div className="col-4 col-md-3 text-success fw-medium">
                                <i className="bi bi-arrow-down-circle-fill me-1"></i> Entrada
                            </div>
                            <div className="col-4 col-md-2 text-center fw-bold">
                                100 un.
                            </div>
                            <div className="col-4 col-md-3 text-end text-muted">
                                <i className="bi bi-calendar3 me-1 d-inline d-md-none"></i> 20/03/2026
                            </div>
                        </div>

                        <div className="row align-items-center p-3 border-bottom m-0">
                            <div className="col-12 col-md-4 mb-2 mb-md-0">
                                <h6 className="mb-0 fw-bold text-dark">Álcool 70%</h6>
                            </div>
                            <div className="col-4 col-md-3 text-danger fw-medium">
                                <i className="bi bi-arrow-up-circle-fill me-1"></i> Saída
                            </div>
                            <div className="col-4 col-md-2 text-center fw-bold">
                                12 un.
                            </div>
                            <div className="col-4 col-md-3 text-end text-muted">
                                <i className="bi bi-calendar3 me-1 d-inline d-md-none"></i> 10/01/2026
                            </div>
                        </div>

                        <div className="row align-items-center p-3 m-0">
                            <div className="col-12 col-md-4 mb-2 mb-md-0">
                                <h6 className="mb-0 fw-bold text-dark">Máscara Cirúrgica</h6>
                            </div>
                            <div className="col-4 col-md-3 text-success fw-medium">
                                <i className="bi bi-arrow-down-circle-fill me-1"></i> Entrada
                            </div>
                            <div className="col-4 col-md-2 text-center fw-bold">
                                200 un.
                            </div>
                            <div className="col-4 col-md-3 text-end text-muted">
                                <i className="bi bi-calendar3 me-1 d-inline d-md-none"></i> 27/02/2026
                            </div>
                        </div>

                    </TableCard>

                </div>
            </div>

            <Footer />

        </div>
    );
}
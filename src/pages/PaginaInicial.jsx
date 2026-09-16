import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import BemVindo from '../components/BemVindo';
import TableCard from '../components/TableCard';
import Equipe from '../components/Equipe';
import Footer from '../components/Footer';

export default function PaginaInicial() {
    // Dados de exemplo para preencher dentro do TableCard
    const produtosExemplo = [
        { id: 1, nome: 'Seringa Descartável', quantidade: 150, status: 'Em Estoque' },
        { id: 2, nome: 'Luvas de Nitrilo', quantidade: 20, status: 'Estoque Baixo' },
        { id: 3, nome: 'Álcool em Gel 70%', quantidade: 80, status: 'Em Estoque' },
    ];

    const colunasTabela = (
        <>
            <div className="col-4">Produto</div>
            <div className="col-4">Quantidade</div>
            <div className="col-4">Status</div>
        </>
    );

    const acoesTabela = (
        <>
            <i className="bi bi-filter style-pointer" title="Filtrar"></i>
            <i className="bi bi-plus-circle style-pointer" title="Adicionar"></i>
        </>
    );

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Wrapper principal Flex: Lado a lado no Desktop, coluna no Mobile */}
            <div className="d-flex flex-column flex-md-row flex-grow-1">
                
                {/* 1. Sidebar */}
                <Sidebar active="inicio" />

                {/* 2. Área de Conteúdo Principal */}
                <main className="flex-grow-1 p-3 p-md-4 d-flex flex-column">
                    <Header />

                    <div className="container-fluid flex-grow-1 p-0">
                        {/* Mensagem de Boas-Vindas */}
                        <div className="row mb-4">
                            <div className="col-12">
                                <BemVindo />
                            </div>
                        </div>

                        {/* Conteúdo em Grid (Tabela + Equipe) */}
                        <div className="row g-4">
                            <div className="col-12 col-lg-8">
                                <h5 className="fw-bold mb-3">Resumo do Estoque</h5>
                                <TableCard colunas={colunasTabela} acoes={acoesTabela}>
                                    <ul className="list-group list-group-flush">
                                        {produtosExemplo.map((item) => (
                                            <li 
                                                key={item.id} 
                                                className="list-group-item d-flex align-items-center justify-content-between p-3"
                                            >
                                                <div className="row w-100 align-items-center">
                                                    <div className="col-12 col-md-4 fw-medium">{item.nome}</div>
                                                    <div className="col-12 col-md-4 text-muted">{item.quantidade} un</div>
                                                    <div className="col-12 col-md-4">
                                                        <span className={`badge ${item.status === 'Estoque Baixo' ? 'bg-danger' : 'bg-success'}`}>
                                                            {item.status}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </TableCard>
                            </div>

                            <div className="col-12 col-lg-4">
                                <Equipe onVerTodos={() => alert('Ver todos os membros')} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Rodapé da Aplicação */}
            <Footer />
        </div>
    );
}
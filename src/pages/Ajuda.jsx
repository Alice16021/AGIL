import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Ajuda() {

    // Lista dinâmica de perguntas frequentes
    const faqs = [
        {
            id: 'faq1',
            pergunta: 'Como atualizar a quantidade de um produto?',
            resposta: 'Para atualizar a quantidade, vá na aba "Produtos", selecione o botão de edição dos produtos, escolha o produto desejado e atualize a quantidade disponível.'
        },
        {
            id: 'faq2',
            pergunta: 'Posso excluir um produto do sistema?',
            resposta: 'Sim, através do ícone de lixeira na lista de produtos, desde que tenha permissão do gestor.'
        },
        {
            id: 'faq3',
            pergunta: 'Como registrar entrada de produtos?',
            resposta: 'Acesse o Histórico e selecione "Nova Entrada" para preencher os dados da nota.'
        },
        {
            id: 'faq4',
            pergunta: 'Quem pode acessar o sistema?',
            resposta: 'Apenas funcionários cadastrados e autorizados pelo RH.'
        },
        {
            id: 'faq5',
            pergunta: 'Posso acessar o sistema pelo celular?',
            resposta: 'Sim, o sistema é responsivo e pode ser acessado pelo navegador do seu smartphone.'
        },
        {
            id: 'faq6',
            pergunta: 'Como entrar em contato com o suporte?',
            resposta: 'Envie um e-mail para suporte@agil.com ou use o chat interno.'
        }
    ];

    return (
        <div className="min-vh-100 d-flex flex-column">
            <div className="d-flex flex-column flex-md-row p-3 gap-3 flex-grow-1">

                <Sidebar active="ajuda" />

                <div className="flex-grow-1 w-100">

                    <Header />

                    <div className="faq-banner mb-4">
                        <h2 className="fw-bold">Perguntas Frequentes</h2>
                    </div>

                    <div className="bg-white p-4 rounded-4 shadow-sm">
                        <div className="accordion accordion-flush" id="accordionFAQ">

                            {faqs.map((faq) => (
                                <div className="accordion-item" key={faq.id}>
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed py-4"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${faq.id}`}
                                        >
                                            {faq.pergunta}
                                        </button>
                                    </h2>
                                    <div id={faq.id} className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body text-muted">
                                            {faq.resposta}
                                        </div>
                                    </div>
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
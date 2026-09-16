export default function FeatureSection() {
    return (
        <div className="col-lg-5">
            <div className="p-4 text-white rounded-5 shadow" style={{ backgroundColor: "#097D6A" }}>
                <h4 className="text-center mb-4 fw-bold">Principais Funcionalidades</h4>
                <div className="bg-white text-dark p-4 rounded-4">
                    <ul className="mb-0 ms-4">
                        <li className="mb-2">Controle completo de estoque</li>
                        <li className="mb-2">Alertas de produtos em falta ou próximos do vencimento</li>
                        <li className="mb-2">Monitoramento em tempo real</li>
                        <li className="mb-2">Registro de entradas e saídas</li>
                        <li>Acesso seguro para usuários autorizados</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
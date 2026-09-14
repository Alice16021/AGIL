export default function TestimonialSection() {
    return (
        <div className="col-lg-7">
            <div className="d-flex flex-column gap-3">

                {/* Card 1 */}
                <div className="p-3 bg-white rounded-4 shadow-sm d-flex align-items-center" style={{ border: "1px solid #eee" }}>
                    <img
                        src="https://png.pngtree.com/png-vector/20241031/ourmid/pngtree-professional-black-female-healthcare-provider-in-medical-attire-png-image_14217235.png"
                        className="rounded-circle me-3"
                        alt="Avatar"
                        style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                    <div>
                        <small className="text-muted d-block mb-1">
                            "O sistema facilitou muito o controle do estoque da nossa clínica. Antes perdíamos materiais por falta de organização, agora tudo está sob controle."
                        </small>
                        <div className="fw-bold small text-dark">— Dra. Mariana Silva</div>
                    </div>
                </div>

                {/* Card 2 (Verde e recuado) */}
                <div
                    className="p-3 text-white rounded-4 shadow-sm d-flex align-items-center"
                    style={{
                        backgroundColor: "#097D6A", // Mesma cor do card de funcionalidades
                        marginLeft: "40px" // Recuo maior para dar o efeito da referência
                    }}
                >
                    <img
                        src="https://img.freepik.com/fotos-gratis/aproxime-se-de-uma-pessoa-sorridente-na-sala-de-conferencias_23-2149085997.jpg"
                        className="rounded-circle me-3"
                        alt="Avatar"
                        style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                    <div>
                        <small className="d-block mb-1">
                            "Interface simples e muito fácil de usar. Em poucos minutos já conseguimos cadastrar todos os produtos."
                        </small>
                        <div className="fw-bold small">— Carlos Mendes, Administrador</div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="p-3 bg-white rounded-4 shadow-sm d-flex align-items-center" style={{ border: "1px solid #eee" }}>
                    <img
                        src="https://img.freepik.com/fotos-gratis/enfermeira-negra-em-seu-espaco-de-trabalho_52683-100580.jpg"
                        className="rounded-circle me-3"
                        alt="Avatar"
                        style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                    <div>
                        <small className="text-muted d-block mb-1">
                            "Os alertas de estoque baixo ajudam demais! Nunca mais ficamos sem materiais importantes."
                        </small>
                        <div className="fw-bold small text-dark">— Fernanda Oliveira, Enfermagem</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
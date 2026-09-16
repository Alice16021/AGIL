export default function TestimonialSection() {
    return (
        <div className="col-lg-7">
            <div className="d-flex flex-column gap-3">
                <div className="p-3 bg-white border rounded-4 shadow-sm d-flex align-items-center">
                    <img 
                        src="https://png.pngtree.com/png-vector/20241031/ourmid/pngtree-professional-black-female-healthcare-provider-in-medical-attire-png-image_14217235.png"
                        className="rounded-circle me-3" 
                        alt="Avatar" 
                    />
                    <div>
                        <small className="text-muted">
                            "“O sistema facilitou muito o controle do estoque da nossa clínica. Antes perdíamos materiais por falta de organização, agora tudo está sob controle.”"
                        </small>
                        <div className="fw-bold small">— Dra. Mariana Silva</div>
                    </div>
                </div>

                <div 
                    className="p-3 text-white rounded-4 shadow-sm d-flex align-items-center"
                    style={{ backgroundColor: "#069981", marginLeft: "20px" }}
                >
                    <img 
                        src="https://img.freepik.com/fotos-gratis/aproxime-se-de-uma-pessoa-sorridente-na-sala-de-conferencias_23-2149085997.jpg?semt=ais_hybrid&w=740&q=80"
                        className="rounded-circle me-3" 
                        alt="Avatar" 
                    />
                    <div>
                        <small>
                            "“Interface simples e muito fácil de usar. Em poucos minutos já conseguimos cadastrar todos os produtos.”"
                        </small>
                        <div className="fw-bold small">— Carlos Mendes, Administrador</div>
                    </div>
                </div>

                <div className="p-3 bg-white border rounded-4 shadow-sm d-flex align-items-center">
                    <img 
                        src="https://img.freepik.com/fotos-gratis/enfermeira-negra-em-seu-espaco-de-trabalho_52683-100580.jpg"
                        className="rounded-circle me-3" 
                        alt="Avatar" 
                    />
                    <div>
                        <small className="text-muted">
                            "“Os alertas de estoque baixo ajudam demais! Nunca mais ficamos sem materiais importantes.”"
                        </small>
                        <div className="fw-bold small">— Fernanda Oliveira, Enfermagem</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
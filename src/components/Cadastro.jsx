import logo from "../img/Logo_semfundo.png";
import "../styles/cad.css";

function Cadastro() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div
                className="card shadow border-0 p-4"
                style={{ width: "100%", maxWidth: "900px", borderRadius: "20px" }}
            >
                <div className="row align-items-center">
                    <div className="col-md-5 text-center">
                        <img
                            src={logo}
                            className="img-fluid mb-3"
                            style={{ maxWidth: "150px" }}
                            alt="Logo"
                        />
                        <h1 className="fw-bold">Crie sua conta</h1>
                    </div>

                    <div className="col-md-7">
                        <form>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Nome completo"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="CNPJ"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="E-mail"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Nome da empresa"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Razão social"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="password"
                                    className="form-control custom-input"
                                    placeholder="Senha"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control custom-input"
                                    placeholder="Confirmar senha"
                                />
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="termos" />
                                <label className="form-check-label" htmlFor="termos">
                                    Aceito os termos
                                </label>
                            </div>

                            <div className="d-grid mt-4">
                                <Link to="/login" className="text-decoration-none">
                                    <button
                                        type="submit"
                                        className="btn btn-dark btn-lg shadow-sm"
                                        style={{ borderRadius: "12px" }}
                                    >
                                        Criar Conta
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
export default function HeroSection() {
    return (
        <section 
            className="d-flex flex-column justify-content-center text-white position-relative"
            style={{
                background: "linear-gradient(180deg, #74bba8 0%, #178a73 100%)",
                minHeight: "450px",
                paddingTop: "80px" 
            }}
        >
            <div className="container text-center">
                <h1 className="fw-bold mb-0" style={{ fontSize: "8rem", letterSpacing: "5px" }}>
                    AGIL
                </h1>
            </div>

            <div className="container-fluid position-absolute bottom-0 start-0 p-4">
                <p 
                    className="mb-0 opacity-75 small text-start" 
                    style={{ maxWidth: "300px", lineHeight: "1.2" }}
                >
                    Site destinado ao gerenciamento de estoque de pequenas empresas e clínicas
                </p>
            </div>
        </section>
    );
}
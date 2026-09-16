import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <nav className="w-100 position-absolute top-0 start-0 p-4" style={{ zIndex: 10 }}>
            <div 
                className="container-fluid d-flex justify-content-between align-items-center rounded-pill px-4 py-2" 
                style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(4px)",
                    border: "none"
                }}
            >
                
                <div>
                    <img 
                        src={logo} 
                        alt="Logo AGIL" 
                        style={{ height: "35px", objectFit: "contain" }} 
                    />
                </div>

                <button className="btn btn-outline-light rounded-pill px-4 fw-semibold d-flex align-items-center gap-2">
                    Login <i className="bi bi-person-fill"></i>
                </button>
            </div>
        </nav>
    );
}
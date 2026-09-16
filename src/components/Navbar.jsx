import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <header className="navbar-fixed-container">
            <nav className="navbar-pill">

                <Link
                    to="/"
                    className="d-flex align-items-center text-decoration-none"
                >
                    <img
                        src={logo}
                        alt="AGIL"
                        className="logo-img"
                    />
                </Link>

                <Link
                    to="/login"
                    className="btn btn-outline-light rounded-pill px-4 login-btn"
                >
                    Login
                    <i className="bi bi-person-circle ms-1"></i>
                </Link>

            </nav>
        </header>
    );
}

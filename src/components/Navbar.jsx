import { Menu } from 'lucide-react';

export default function Navbar({ activeSection, mobileOpen, onToggleMobile, onNavigate }) {
    const links = [
        { id: 'emotional-section', label: 'Inicio' },
        { id: 'nuestra-historia', label: 'Historia' },
        { id: 'seccion-parrilla', label: 'La Parrilla' },
        { id: 'seccion-local', label: 'El Local' },
        { id: 'contacto', label: 'Contacto' },
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="nav-logo">CHUZZGRILL</div>

                <div className="nav-links">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={activeSection === link.id ? 'active' : ''}
                            onClick={onNavigate}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a href="#contacto" className="nav-cta">
                    ¿Te Antojas?<div className="pulse-ring"></div>
                </a>

                <button
                    className={`burger-menu ${mobileOpen ? 'active' : ''}`}
                    id="burger-menu"
                    type="button"
                    aria-label="Abrir menú"
                    onClick={onToggleMobile}
                >
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </button>
            </div>
        </nav>
    );
}

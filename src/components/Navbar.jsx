import { Menu } from 'lucide-react';

export default function Navbar({ activeSection, mobileOpen, onToggleMobile, onNavigate }) {
    const links = [
        { id: 'hero', label: 'Inicio' },
        { id: 'nuestra-historia', label: 'Historia' },
        { id: 'seccion-parrilla', label: 'La Parrilla' },
        { id: 'seccion-local', label: 'El Local' },
        { id: 'contacto', label: 'Contacto' },
    ];

    return (
        <nav className="navbar">
            <div className="nav-container navbar-content">
                <div className="nav-logo">
                    <img src="/logo.svg" alt="Chuzzgrill Logo" style={{ height: '100%', width: 'auto' }} />
                </div>

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

                <a href="#contacto" className="nav-cta" onClick={onNavigate}>
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

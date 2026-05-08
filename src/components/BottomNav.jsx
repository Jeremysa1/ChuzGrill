import { BookOpen, Flame, Home, MapPin } from 'lucide-react';

export default function BottomNav({ activeSection, onNavigate }) {
    return (
        <nav className="bottom-nav-mobile">
            <a href="#hero" className={`bottom-nav-item ${activeSection === 'hero' ? 'active' : ''}`} onClick={onNavigate}>
                <Home />
                <span>Inicio</span>
            </a>
            <a href="#nuestra-historia" className={`bottom-nav-item ${activeSection === 'nuestra-historia' ? 'active' : ''}`} onClick={onNavigate}>
                <BookOpen />
                <span>Historia</span>
            </a>
            <a href="#seccion-parrilla" className={`bottom-nav-item ${activeSection === 'seccion-parrilla' ? 'active' : ''}`} onClick={onNavigate}>
                <Flame />
                <span>Parrilla</span>
            </a>
            <a href="#seccion-local" className={`bottom-nav-item ${activeSection === 'seccion-local' ? 'active' : ''}`} onClick={onNavigate}>
                <MapPin />
                <span>Local</span>
            </a>
        </nav>
    );
}

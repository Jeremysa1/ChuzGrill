export default function MobileNav({ open, onNavigate }) {
    return (
        <div className={`mobile-nav ${open ? 'active' : ''}`} id="mobile-nav">
            <a href="#hero" onClick={onNavigate}>Inicio</a>
            <a href="#nuestra-historia" onClick={onNavigate}>Historia</a>
            <a href="#seccion-parrilla" onClick={onNavigate}>La Parrilla</a>
            <a href="#seccion-local" onClick={onNavigate}>El Local</a>
            <a href="#contacto" onClick={onNavigate}>Contacto</a>
        </div>
    );
}

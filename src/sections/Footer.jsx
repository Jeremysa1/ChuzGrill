import { MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-line"></div>
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="nav-logo" style={{ width: '140px' }}>CHUZZGRILL</div>
                        <p className="footer-tagline">Artesanal desde el primer día. <br /> Medellín, Colombia.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Navegación</h4>
                        <ul>
                            <li><a href="#hero">Inicio</a></li>
                            <li><a href="#nuestra-historia">Historia</a></li>
                            <li><a href="#seccion-parrilla">La Parrilla</a></li>
                            <li><a href="#seccion-local">El Local</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Encuéntranos en:</h4>
                        <div className="social-links">
                            <a href="#" className="social-link instagram" aria-label="Instagram"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                            <a href="#" className="social-link tiktok" aria-label="TikTok"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.36-2.81-.12-1.49.36-2.62 1.61-2.82 3.13-.18 1.04.14 2.15.82 2.96.65.82 1.6 1.34 2.65 1.48 1.05.09 2.13-.15 3.01-.74.88-.6 1.48-1.55 1.59-2.61.12-1.05.14-2.11.12-3.18V.02z" /></svg></a>
                            <a href="#" className="social-link whatsapp" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg></a>
                            <a href="#" className="social-link maps" aria-label="Google Maps"><MapPin /></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">© 2026 CHUZZGRILL • SABOR CON ALMA • HECHO EN MEDELLÍN</div>
            </div>
        </footer>
    );
}

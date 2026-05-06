import { Clock, MapPin, Truck } from 'lucide-react';
import CarouselControls from '../components/CarouselControls.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const items = [
    {
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000',
        category: 'Destacado',
        title: 'Hamburguesa Chuzz',
        desc: 'Carne artesanal de 150g, queso fundido y salsa secreta.',
        price: '$ 28.000',
    },
    {
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000',
        category: 'Especialidad',
        title: 'Chuzo de Cerdo',
        desc: 'Lomo de cerdo seleccionado, asado lentamente al carbón.',
        price: '$ 22.000',
    },
    {
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000',
        category: 'Familiar',
        title: 'Combo Chuzzgrill',
        desc: 'Lo mejor de nuestros cortes para compartir.',
        price: '$ 85.000',
    },
];

export default function Local() {
    return (
        <section id="seccion-local" className="section-premium light">
            <div className="container">
                <SectionHeading title="Nuestro Local" subtitle="Un espacio pensado para tu comodidad" />

                <div className="carousel-wrapper">
                    <div className="carousel-container" id="carousel-menu">
                        <div className="carousel-track">
                            {items.map((item, index) => (
                                <div key={item.title} className={`carousel-slide ${index === 0 ? 'active' : ''}`} data-index={index}>
                                    <div className="menu-card" style={{ height: '100%', border: 'none' }}>
                                        <div className="card-img-wrapper" style={{ height: '100%' }}>
                                            <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            <div className="card-category">{item.category}</div>
                                            <div className="card-hover-overlay" style={{ opacity: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                                                <div className="card-content" style={{ color: 'white', width: '100%' }}>
                                                    <h3 className="card-title">{item.title}</h3>
                                                    <p className="card-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>{item.desc}</p>
                                                    <div className="card-footer">
                                                        <span className="card-price" style={{ color: 'var(--naranja)' }}>{item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <CarouselControls previousId="prev-menu" nextId="next-menu" progressId="progress-menu" />
                </div>

                <div className="info-premium-grid">
                    <div className="info-block">
                        <div className="info-icon"><MapPin /></div>
                        <div className="info-text">
                            <h4>Ubicación</h4>
                            <span className="main-data">Comuna 10, Medellín</span>
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="info-icon"><Clock /></div>
                        <div className="info-text">
                            <h4>Horario</h4>
                            <span className="main-data">Jue a Dom | 6 PM - 11 PM</span>
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="info-icon"><Truck /></div>
                        <div className="info-text">
                            <h4>Domicilios</h4>
                            <span className="main-data">Pide por WhatsApp</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

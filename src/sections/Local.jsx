import { useState } from 'react';
import { Clock, MapPin, Truck } from 'lucide-react';

const slides = [
    { src: '/Fuego1.png', title: 'Encendiendo el antojo', position: 'center top' },
    { src: '/carne1.jpeg', title: 'Sellando el sabor', position: 'center top' },
    { src: '/Hambur1.png', title: 'Hechas para ti', position: 'center center' },
    { src: '/Detalleham.png', title: 'Antojate de cada detalle', position: 'center center' },
    { src: '/Hambur2.png', title: 'Derritiendo los sentidos', position: 'center center' },
];

export default function Local() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="seccion-local" className="section-premium dark-local">
            <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 className='title-parrilla' style={{ color: 'var(--crema)' }}>Nuestro Local</h1>
                <p className='sub-parrilla' style={{ color: 'rgba(255, 248, 240, 0.9)' }}>Pasa, siéntate y prepárate para un sabor auténtico y sin atajos.</p>

                <div className="expanding-container-local">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`panel-local ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img
                                src={slide.src}
                                alt={slide.title}
                                className="panel-local-img"
                                style={{ objectPosition: slide.position }}
                            />
                            <h3>{slide.title}</h3>
                        </div>
                    ))}
                </div>

                <div className="info-premium-grid" style={{ width: '100%' }}>
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
                            <span className="main-data">Lunes a sabado | 5 PM - 10 PM</span>
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
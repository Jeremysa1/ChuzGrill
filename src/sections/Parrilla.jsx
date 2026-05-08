import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';

const slides = [
    { src: '/Parrilla1.png', title: 'Cortes Selectos' },
    { src: '/Parrilla2.png', title: 'Ahumado Lento' },
    { src: '/Parrilla3.png', title: 'Maestría al Fuego' },
    { src: '/Parrilla4.png', title: 'Sabor del Encuentro' },
];

export default function Parrilla() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="seccion-parrilla" className="section-premium dark" style={{ position: 'relative' }}>
            <div className="ember-container"></div>
            <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 className='title-parrilla'>Sabor al Carbón</h1>
                <p className='sub-parrilla'>Todo comienza en el fuego. Desliza y conoce la historia de nuestra parrilla, donde transformamos ingredientes frescos en puro sabor.</p>

                <div className="expanding-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`panel ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img
                                src={slide.src}
                                alt={slide.title}
                                className="panel-img"
                            />
                            <h3>{slide.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

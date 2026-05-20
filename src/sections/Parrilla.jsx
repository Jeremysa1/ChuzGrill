import { Flame, ChevronRight } from 'lucide-react';

const items = [
    {
        label: '',
        src: '/Parrilla1.webp',
        title: <>Cortes <span className="accent-red">Selectos</span></>,
        desc: 'Carnes de primera, seleccionadas con criterio, preparadas para el fuego y selladas en su punto.',
        reverse: false,
    },
    {
        label: '',
        src: '/Parrillado.webp',
        title: <>Tiempo y <span className="accent-red">Carbón</span></>,
        desc: 'El fuego tiene su ritmo. Cocinamos con paciencia para lograr el punto exacto, sin atajos ni procesos acelerados.',
        reverse: true,
    },
    {
        label: '',
        src: '/Parrilla4.webp',
        title: <>Cerca del <span className="accent-red">fuego</span></>,
        desc: 'Nos gusta preparar cada pedido frente a quien lo espera. Porque la experiencia también empieza antes del primer bocado.',
        reverse: false,
    },
];

export default function Parrilla() {
    return (
        <section id="seccion-parrilla" className="pl-section">
            {/* Header centrado */}
            <div className="pl-header">
                <span className="pl-eyebrow">
                    <Flame size={14} />
                    La Parrilla
                </span>
                <h2 className="pl-title">
                    Sabor al <em><span className="accent-red">Carbón</span></em>
                </h2>
                <p className="pl-subtitle">
                    Todo comienza en el fuego. Ingredientes frescos transformados en puro sabor artesanal.
                </p>
            </div>

            {/* Filas alternas imagen + texto */}
            <div className="pl-rows">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`pl-row${item.reverse ? ' pl-row--reverse' : ''}`}
                    >
                        <div className="pl-row-image">
                            <div className="pl-img-frame">
                                <img src={item.src} alt="Parrilla Chuzgrill" className="pl-img" loading="lazy" />
                                <div className="pl-img-overlay" />
                            </div>
                        </div>
                        <div className="pl-row-content">
                            <span className="pl-row-label">{item.label}</span>
                            <h3 className="pl-row-title">{item.title}</h3>
                            <div className="pl-row-divider" />
                            <p className="pl-row-desc">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA centrado */}
            <div className="pl-footer-cta">
                <a href="https://wa.me/573188091851" className="pl-link" target="_blank" rel="noopener noreferrer">
                    Pedir ahora <ChevronRight size={16} />
                </a>
            </div>
        </section>
    );
}

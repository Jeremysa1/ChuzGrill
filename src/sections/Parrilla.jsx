import { Flame, ChevronRight } from 'lucide-react';

const items = [
    {
        label: '',
        src: '/Parrilla1.png',
        title: 'Cortes Selectos',
        desc: 'Carnes de primera, seleccionadas con criterio, preparadas artesanalmente para el fuego y selladas en su punto.',
        reverse: false,
    },
    {
        label: '',
        src: '/Parrillado.jpg',
        title: 'Ahumado Lento',
        desc: 'Horas de humo, carbón y paciencia para lograr una textura que no se olvida, sin atajos.',
        reverse: true,
    },
    {
        label: '',
        src: '/Parrilla4.png',
        title: 'Sabor del Encuentro',
        desc: 'La parrilla no miente — el fuego y el tiempo hacen el resto. El sabor es el resultado de un ritual que se comparte.',
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
                    Sabor al <em>Carbón</em>
                </h2>
                <p className="pl-subtitle">
                    Todo comienza en el fuego. Ingredientes frescos transformados en puro sabor artesanal.
                </p>
            </div>

            {/* Filas alternas imagen + texto */}
            <div className="pl-rows">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className={`pl-row${item.reverse ? ' pl-row--reverse' : ''}`}
                    >
                        <div className="pl-row-image">
                            <div className="pl-img-frame">
                                <img src={item.src} alt={item.title} className="pl-img" />
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
                <a href="#contacto" className="pl-link">
                    Ver el menú completo <ChevronRight size={16} />
                </a>
            </div>
        </section>
    );
}

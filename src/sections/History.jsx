import { Flame, Heart, Users } from 'lucide-react';

const stories = [
    {
        id: 'origin',
        label: '  Origen',
        heading: <>Dos personas,<br />una misma <span className="accent-red">pasión</span>.</>,
        body: 'Todo comenzó con un sueño compartido y las ganas de construir algo propio desde cero. Somos una pareja de emprendedores de la Comuna 10 de Medellín que un día decidió convertir su pasión por la cocina en algo real.',
        image: '/Pareja1.webp',
        imageAlt: 'Los fundadores de ChuzGrill',
        reverse: false,
        accentIcon: <Heart size={18} />,
    },
    {
        id: 'craft',
        label: '  Artesanal',
        heading: <>Sin <span className="accent-red">atajos</span>.<br />Sin procesos industriales.</>,
        body: 'Cada carne la preparamos nosotros mismos, cada salsa lleva nuestra receta, y cada producto sale fresco al momento en que lo pides. Somos un proyecto construido con esfuerzo diario y el amor genuino por lo que hacemos.',
        image: '/Preparacion1.webp',
        imageAlt: 'Proceso artesanal ChuzGrill',
        reverse: true,
        accentIcon: <Flame size={18} />,
    },
    {
        id: 'fire',
        label: ' Familiar',
        heading: <>De nuestra cocina a tu <span className="accent-red">mesa</span></>,
        body: 'No buscamos hacer algo rápido; buscamos hacer algo que valga la pena compartir. Cada ingrediente, cada receta y cada preparación reflejan el trabajo y la dedicación que ponemos en lo que hacemos.',
        image: '/Procesos.webp',
        imageAlt: 'Fuego y parrilla ChuzGrill',
        reverse: false,
        accentIcon: <Users size={18} />,
    },
];

export default function History() {
    return (
        <section id="nuestra-historia" className="history-section">

            {/* Header editorial */}
            <div className="history-header reveal reveal-up">
                <span className="history-eyebrow">Nuestra historia</span>
                <h2 className="history-title">Construido con<br /><em><span className="accent-red">fuego</span> y esfuerzo.</em></h2>
                <div className="history-title-line" />
            </div>

            {/* Story blocks */}
            <div className="history-stories">
                {stories.map((story) => (
                    <div
                        key={story.id}
                        className={`history-row ${story.reverse ? 'history-row--reverse' : ''}`}
                    >
                        {/* Image side */}
                        <div className="history-image-wrap reveal reveal-scale">
                            <div className="history-image-frame">
                                <img
                                    src={story.image}
                                    alt={story.imageAlt}
                                    className="history-img"
                                    loading="lazy"
                                />
                                <div className="history-image-overlay" />
                            </div>
                            {/* Decorative accent block */}
                            <div className={`history-deco ${story.reverse ? 'history-deco--left' : 'history-deco--right'}`} />
                        </div>

                        {/* Content side */}
                        <div className={`history-content reveal ${story.reverse ? 'reveal-right' : 'reveal-left'}`}>
                            <div className="history-content-inner">
                                <div className="history-label-row">
                                    <span className="history-accent-icon">{story.accentIcon}</span>
                                    <span className="history-label">{story.label}</span>
                                </div>
                                <h3 className="history-story-title">
                                    {story.heading}
                                </h3>
                                <div className="history-divider" />
                                <p className="history-body">{story.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Values strip */}
            <div className="history-values reveal reveal-up">
                <div className="value-pill">
                    <Flame size={16} />
                    <span>Carbón</span>
                </div>
                <div className="history-values-sep" />
                <div className="value-pill">
                    <Heart size={16} />
                    <span>Amor</span>
                </div>
                <div className="history-values-sep" />
                <div className="value-pill">
                    <Users size={16} />
                    <span>Familia</span>
                </div>
            </div>

        </section>
    );
}

import { Flame, Heart, Users } from 'lucide-react';

const stories = [
    {
        id: 'origin',
        label: '  Origen',
        heading: 'Dos personas,\nuna misma pasión.',
        body: 'Todo comenzó con un sueño compartido y las ganas de construir algo propio desde cero. Somos una pareja de emprendedores de la Comuna 10 de Medellín que un día decidió convertir su pasión por la cocina en algo real.',
        image: '/Pareja1.png',
        imageAlt: 'Los fundadores de ChuzGrill',
        reverse: false,
        accentIcon: <Heart size={18} />,
    },
    {
        id: 'craft',
        label: '  Artesanal',
        heading: 'Sin atajos.\nSin procesos industriales.',
        body: 'Cada carne la preparamos nosotros mismos, cada salsa lleva nuestra receta, y cada producto sale fresco al momento en que lo pides. Somos un proyecto construido con esfuerzo diario y el amor genuino por lo que hacemos.',
        image: '/Preparacion2.png',
        imageAlt: 'Proceso artesanal ChuzGrill',
        reverse: true,
        accentIcon: <Flame size={18} />,
    },
    {
        id: 'fire',
        label: ' Familiar',
        heading: 'El sabor que no se olvida.',
        body: 'Todo el proceso —la carne, las salsas, el fuego— existe para un solo momento: el primero que lo pruebas.',
        image: '/Procesos.png',
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
                <h2 className="history-title">Construido con<br /><em>fuego y esfuerzo.</em></h2>
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
                                    {story.heading.split('\n').map((line, i) => (
                                        <span key={i}>{line}<br /></span>
                                    ))}
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

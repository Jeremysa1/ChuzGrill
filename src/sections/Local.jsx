import { MapPin, Clock, Truck, ChevronRight } from 'lucide-react';

const items = [
    {
        label: '',
        src: '/Fuego1.png',
        pos: 'center top',
        title: 'Encendiendo el antojo',
        desc: 'Todo empieza aquí — el fuego, el carbón, el ritual. Un proceso esencial que le da un sabor unico a los ingredientes.',
        reverse: false,
    },
    {
        label: '',
        src: '/Hambur1.png',
        pos: 'center center',
        title: 'Hechas para ti',
        desc: 'Cada hamburguesa es preparada al momento. Sin procesos industriales, sin atajos. Solo ingredientes frescos.',
        reverse: true,
    },
    {
        label: '',
        src: '/Detalleham.png',
        pos: 'center center',
        title: 'Disfruta de cada detalle',
        desc: 'Desde la selección de cada ingrediente hasta el último toque, todo es pensado para que disfrutes de un sabor autentico.',
        reverse: false,
    },
];

const info = [
    { Icon: MapPin, label: 'Ubicación',  value: 'Comuna 10, Medellín' },
    { Icon: Clock,  label: 'Horario',    value: 'Lunes a Sábado · 5 PM – 10 PM' },
    { Icon: Truck,  label: 'Domicilios', value: '318 809 1851' },
];

export default function Local() {
    return (
        <section id="seccion-local" className="lc-section">
            {/* Header centrado */}
            <div className="lc-header">
                <span className="lc-eyebrow">El Local</span>
                <h2 className="lc-title">
                    Un espacio hecho con <em>alma</em>
                </h2>
                <p className="lc-subtitle">
                    Pasa, siéntate y prepárate para un sabor auténtico y sin atajos.
                </p>
            </div>

            {/* Filas alternas imagen + texto */}
            <div className="lc-rows">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className={`lc-row${item.reverse ? ' lc-row--reverse' : ''}`}
                    >
                        <div className="lc-row-image">
                            <div className="lc-img-frame">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="lc-img"
                                    style={{ objectPosition: item.pos }}
                                />
                                <div className="lc-img-overlay" />
                            </div>
                        </div>
                        <div className="lc-row-content">
                            <span className="lc-row-label">{item.label}</span>
                            <h3 className="lc-row-title">{item.title}</h3>
                            <div className="lc-row-divider" />
                            <p className="lc-row-desc">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Info strip */}
            <div className="lc-info-strip">
                {info.map(({ Icon, label, value }) => (
                    <div key={label} className="lc-info-card">
                        <div className="lc-info-icon">
                            <Icon size={20} />
                        </div>
                        <div className="lc-info-text">
                            <span className="lc-info-label">{label}</span>
                            <strong className="lc-info-value">{value}</strong>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA centrado */}
            <div className="lc-footer-cta">
                <a href="#contacto" className="lc-link">
                    Encuéntranos aquí <ChevronRight size={16} />
                </a>
            </div>
        </section>
    );
}
import CarouselControls from '../components/CarouselControls.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const slides = [
    '/Parrilla1.png',
    '/Parrilla2.png',
    '/Parrilla3.png',
];

export default function Parrilla() {
    return (
        <section id="seccion-parrilla" className="section-premium dark" style={{ position: 'relative' }}>
            <div className="ember-container"></div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <SectionHeading title="Directo al Carbón" subtitle="Nuestros favoritos, preparados al momento" />
                <div className="carousel-wrapper">
                    <div className="carousel-container" id="carousel-parrilla">
                        <div className="carousel-track">
                            {slides.map((src, index) => (
                                <div key={src} className={`carousel-slide ${index === 0 ? 'active' : index === 1 ? 'next' : ''}`} data-index={index} style={{ backgroundImage: `url('${src}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className="slide-overlay"></div>
                                    <div className="slide-number">0{index + 1} / 03</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <CarouselControls previousId="prev-parrilla" nextId="next-parrilla" progressId="progress-parrilla" />
                </div>
            </div>
        </section>
    );
}

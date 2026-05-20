import { Star } from 'lucide-react';

export default function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header reveal reveal-up">
                    <h2>Voces de Amigos</h2>
                    <p>Lo que dicen quienes ya probaron</p>
                </div>
                <div className="testimonial-grid">
                    <div className="testimonial-card reveal reveal-up">
                        <div className="stars-container"><Star /><Star /><Star /><Star /><Star /></div>
                        <p className="testimonial-text">"La mejor hamburguesa artesanal que he probado en Medellín. El sabor del carbón es real y las salsas son de otro mundo."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">C</div>
                            <div className="author-info"><span className="name">Carlos G.</span></div>
                        </div>
                    </div>
                    <div className="testimonial-card reveal reveal-up">
                        <div className="stars-container"><Star /><Star /><Star /><Star /><Star /></div>
                        <p className="testimonial-text">"Ambiente familiar y chuzos gigantes. ¡Recomendadísimo!"</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">M</div>
                            <div className="author-info"><span className="name">Mariana L.</span></div>
                        </div>
                    </div>
                    <div className="testimonial-card reveal reveal-up">
                        <div className="stars-container"><Star /><Star /><Star /><Star /><Star /></div>
                        <p className="testimonial-text">"Pedí domicilio y llegó caliente y perfecto. El empaque también es muy premium."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">J</div>
                            <div className="author-info"><span className="name">Juan P.</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

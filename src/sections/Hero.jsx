import { ChevronsDown } from 'lucide-react';
import AnimatedTitle from '../components/AnimatedTitle.jsx';

export default function Hero({ onNavigate }) {
    return (
        <section id="hero" className="hero-split">
            <div className="hero-half parrilla" onClick={() => onNavigate('seccion-parrilla')}>
                <div
                    className="hero-bg"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1500')" }}
                ></div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <AnimatedTitle id="title-parrilla" text="La Parrilla" />
                    <div className="hero-line"></div>
                    <p className="hero-subtitle">El alma del carbón y el sabor artesanal que nos define.</p>
                    <div className="hero-arrow"><ChevronsDown /></div>
                </div>
            </div>

            <div className="hero-half local" onClick={() => onNavigate('seccion-local')}>
                <div
                    className="hero-bg"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1500')" }}
                ></div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <AnimatedTitle id="title-local" text="El Local" />
                    <div className="hero-line"></div>
                    <p className="hero-subtitle">Un refugio acogedor en el corazón de la Comuna 10.</p>
                    <div className="hero-arrow"><ChevronsDown /></div>
                </div>
            </div>

            <div className="scroll-indicator">Descubre más</div>
        </section>
    );
}

import { Flame, Heart, Users } from 'lucide-react';

export default function Emotional() {
    return (
        <section className="emotional-section">
            <div className="container emotional-content">
                <h2 className="reveal reveal-up">¿Hambriento de algo real?</h2>
                <p>
                    <span className="reveal-line">En Chuzzgrill no solo cocinamos,</span>
                    <span className="reveal-line">creamos momentos alrededor del fuego.</span>
                    <span className="reveal-line">Comida artesanal, hecha con paciencia</span>
                    <span className="reveal-line">y el sazón único de nuestra historia.</span>
                </p>
            </div>
            <div className="ember-container">
                {Array.from({ length: 15 }).map((_, index) => (
                    <div
                        key={index}
                        className="ember"
                        style={{
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            left: `${Math.random() * 100}%`,
                            top: '100%',
                            animationDuration: `${Math.random() * 3 + 4}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.4 + 0.1,
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
}

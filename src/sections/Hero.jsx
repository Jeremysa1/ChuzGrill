import React from 'react'

export default function Hero() {
    return (
        <div>
            {/* AQUI DEBEMOS CAMBIAR ESTE HERO, HACERLO MAS LLAMATIVO*/}
            <section className="emotional-section" id="hero">
                <div className="nav-container emotional-content">
                    <h2 className="reveal reveal-up">¿Hambriento de algo real?</h2>
                    <p>
                        <span className="reveal-line">En Chuzzgrill no </span>
                        <span className="reveal-line">solo cocinamos,</span>
                        <span className="reveal-line">creamos momentos </span>
                        <span className="reveal-line">alrededor del fuego.</span>
                    </p>
                    <span className="end-line">Comida artesanal, hecha con paciencia</span>
                    <span className="end-line">y el sazón único de nuestra historia.</span>
                    <a href="#nuestra-historia" className="nav-cta">¡Quiero saber más!</a>
                </div>
                <div className="ember-container">
                    {Array.from({ length: 30 }).map((_, index) => {
                        const size = Math.random() * 5 + 2;
                        const color = '#ff3d00';
                        const glow = '#ff0000';
                        
                        return (
                            <div
                                key={index}
                                className="ember"
                                style={{
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    left: `${Math.random() * 100}%`,
                                    bottom: '-10px',
                                    animationDuration: `${Math.random() * 4 + 3}s`,
                                    animationDelay: `${Math.random() * 4}s`,
                                    background: color,
                                    boxShadow: `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${glow}`,
                                    opacity: 0
                                }}
                            ></div>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}


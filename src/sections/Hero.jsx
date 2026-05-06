import React from 'react'

export default function Hero() {
    return (
        <div>
            {/* AQUI DEBEMOS CAMBIAR ESTE HERO, HACERLO MAS LLAMATIVO*/}
            <section className="emotional-section" id="emotional-section">
                <div className="container emotional-content">
                    <h3 className='entry-message'>COMIDA ARTESANAL DE CALIDAD</h3>
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
        </div>
    )
}


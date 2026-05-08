import { Flame, Heart, Users } from 'lucide-react';

export default function History() {
    return (
        <section id="nuestra-historia" className="history-section">

            <div className="history-content-column reveal reveal-left">
                <div className="history-content-wrapper">
                    <div className="history-timeline"></div>
                    <h2>DOS PERSONAS, UNA MISMA PASIÓN</h2>
                    <p>
                        Todo comenzó con un sueño compartido y las ganas de construir algo propio desde cero. Somos una
                        pareja de emprendedores de la Comuna 10 de Medellín que un día decidió convertir su pasión por la
                        cocina en algo real.
                    </p>
                    <p>
                        Sin procesos industriales, sin atajos: cada carne la preparamos nosotros mismos, cada salsa lleva
                        nuestra receta, y cada producto sale fresco al momento en que lo pides. Somos un proyecto construido
                        con esfuerzo diario y el amor genuino por lo que hacemos.
                    </p>

                    <div className="values-grid">
                        <div className="value-card"><Flame /><span>Carbón</span></div>
                        <div className="value-card"><Heart /><span>Amor</span></div>
                        <div className="value-card"><Users /><span>Familia</span></div>
                    </div>
                </div>
            </div>

            <div className="history-image-column reveal reveal-right">
                <img src="/ParejaE1.png" alt="Fundadores de Chuzzgrill" />
            </div>
        </section>
    );
}

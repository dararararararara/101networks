import React, { useEffect, useRef } from 'react';
import '../estilos/FunFacts.css';

function FunFacts() {
    const carouselRef = useRef(null);

    const facts = [
        "La velocidad de la luz: La fibra óptica permite que los datos viajen casi a la velocidad de la luz.",
        "Red infinita: Si conectáramos toda la fibra óptica instalada en el mundo, ¡podríamos rodear la Tierra más de 5 veces!",
        "Internet bajo el mar: Más del 99% del tráfico de datos global viaja a través de cables de fibra óptica submarinos.",
        "¿Indestructible? Los cables de fibra óptica son más resistentes que el cobre y pueden durar más de 25 años sin degradarse.",
        "Capacidad infinita: Una sola hebra de fibra óptica puede transmitir más de 40 terabits por segundo.",
        "¿Redes de araña? Algunas fibras ópticas son más delgadas que un cabello humano pero pueden transmitir enormes cantidades de datos.",
        "Viaje global: Una señal de fibra óptica puede viajar de Nueva York a Tokio en menos de un décimo de segundo.",
        "Protección natural: Los cables submarinos están protegidos con varias capas de acero y polímeros para resistir tiburones y terremotos.",
        "Conexión interplanetaria: La NASA está investigando la fibra óptica para mejorar la comunicación con futuras misiones a Marte.",
        "El futuro: La fibra óptica es la base del Internet cuántico, que revolucionará la seguridad y velocidad de la información.",
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: 310, behavior: 'smooth' }); // Desplazar a la derecha
            }
        }, 3000); // Cambiar cada 3 segundos

        return () => clearInterval(intervalId); // Limpieza del intervalo
    }, []);

    return (
        <section id="funfacts" className="fanfacts">
            <h2>Datos Curiosos sobre la Fibra Óptica y el Internet</h2>
            <div className="fanfacts-carousel" ref={carouselRef}>
                {facts.map((fact, index) => (
                    <div key={index} className="fanfacts-item">
                        <strong>{fact.split(':')[0]}:</strong> {fact.split(':')[1]}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FunFacts;

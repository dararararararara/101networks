import React from 'react';
import '../estilos/Hero.css';
import gifFondo from '../assets/J52.gif'; //

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ background: `url(${gifFondo}) center/cover no-repeat` }}>
            <div className="hero-overlay">
                <h1>Conectamos tu empresa a la alta velocidad, como si fuera un puente</h1>
                <p>Fibra óptica de alta calidad para conexiones rápidas y seguras</p>
            </div>
        </section>
    );
};

export default Hero;

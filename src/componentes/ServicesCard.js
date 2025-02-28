import React from 'react';
import '../estilos/ServicesCard.css';

const ServicesCard = () => {
    const services = [
        { title: 'Conexión Fibra Óptica' },
        { title: 'Redes Seguras' },
        { title: 'Soporte 24/7' },
        { title: 'Consultoría en TI' },
        { title: 'Instalación de Cámaras de Seguridad' },
        { title: 'Automatización de Oficinas' },
        { title: 'Soluciones Cloud' },
        { title: 'VPN Empresarial' },
        { title: 'Desarrollo de Aplicaciones' },
        { title: 'Mantenimiento de Servidores' },
        { title: 'Análisis de Datos' },
        { title: 'Gestión de Proyectos' },
        { title: 'Ciberseguridad Avanzada' },
        { title: 'Soporte a Usuarios' },
        { title: 'Redes de Alta Velocidad' },
        { title: 'Integración de Sistemas' }
    ];

    return (
        <section id="services" className="services">
            <h2>Servicios</h2>
            <div className="services-container">
                <div className="service-category">
                    <h3>Internet y la nube</h3>
                    <ul>
                        <li>Conexión Fibra Óptica</li>
                        <li>Soluciones Cloud</li>
                        <li>Redes de Alta Velocidad</li>
                    </ul>
                </div>
                <div className="service-category">
                    <h3>Redes</h3>
                    <ul>
                        <li>Redes Seguras</li>
                        <li>VPN Empresarial</li>
                        <li>Integración de Sistemas</li>
                    </ul>
                </div>
                <div className="service-category">
                    <h3>Soporte y Consultoría</h3>
                    <ul>
                        <li>Soporte 24/7</li>
                        <li>Consultoría en TI</li>
                        <li>Gestión de Proyectos</li>
                    </ul>
                </div>
                <div className="service-category">
                    <h3>Seguridad y Automatización</h3>
                    <ul>
                        <li>Instalación de Cámaras de Seguridad</li>
                        <li>Automatización de Oficinas</li>
                        <li>Ciberseguridad Avanzada</li>
                    </ul>
                </div>
                <div className="service-category">
                    <h3>Desarrollo y Mantenimiento</h3>
                    <ul>
                        <li>Desarrollo de Aplicaciones</li>
                        <li>Mantenimiento de Servidores</li>
                        <li>Análisis de Datos</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ServicesCard;
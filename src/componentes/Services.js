import React from 'react';
import '../estilos/Services.css';

const Services = () => {
    const services = [
        { title: 'Conexión Fibra Óptica', description: 'Instalación rápida y confiable de fibra óptica para empresas de todos los tamaños.' },
        { title: 'Redes Seguras', description: 'Redes privadas y seguras para proteger tus datos y asegurar una conexión estable.' },
        { title: 'Soporte 24/7', description: 'Soporte técnico continuo para resolver cualquier inconveniente que puedas tener.' },
        { title: 'Consultoría en TI', description: 'Asesoría especializada para optimizar la infraestructura tecnológica de tu empresa.' },
        { title: 'Instalación de Cámaras de Seguridad', description: 'Instalación y configuración de sistemas de cámaras de seguridad integradas a tu red.' },
        { title: 'Automatización de Oficinas', description: 'Sistemas de automatización para hacer más eficiente la gestión de tus oficinas.' },
        { title: 'Soluciones Cloud', description: 'Soluciones personalizadas en la nube para almacenar, compartir y proteger tus datos.' },
        { title: 'VPN Empresarial', description: 'Red privada virtual para proteger la información confidencial y facilitar el trabajo remoto.' },
        { title: 'Desarrollo de Software', description: 'Desarrollamos aplicaciones personalizadas para mejorar la eficiencia de tu negocio.' },
        { title: 'Instalación de Servidores', description: 'Implementación de servidores privados o dedicados para tu empresa.' },
        { title: 'Soporte a Infraestructura de Red', description: 'Mantenimiento y soporte a tu infraestructura de red para garantizar la estabilidad.' },
        { title: 'Gestión de Proyectos IT', description: 'Planificación y ejecución de proyectos tecnológicos de principio a fin.' },
        { title: 'Redes de Fibra Óptica Personalizadas', description: 'Creación de redes a medida para tu empresa, asegurando un rendimiento óptimo.' },
        { title: 'Instalación de Wi-Fi Corporativo', description: 'Instalación de redes Wi-Fi corporativas con una cobertura completa y eficiente.' },
        { title: 'Consultoría en Ciberseguridad', description: 'Consultoría para proteger tu infraestructura de red de posibles ataques y brechas de seguridad.' },
        { title: 'Soluciones IoT', description: 'Implementación de soluciones IoT para conectar dispositivos en tu empresa de forma eficiente.' },
        { title: 'Implementación de Datacenters', description: 'Desarrollo de centros de datos para manejar el volumen de información de tu empresa.' },
        { title: 'Interconexión de Oficinas', description: 'Redes privadas que conectan tus oficinas en diferentes ubicaciones con fibra óptica.' },
        { title: 'Desarrollo de Aplicaciones Móviles', description: 'Creación de aplicaciones móviles personalizadas para tu empresa.' },
        { title: 'Optimización de Redes', description: 'Mejoramos el rendimiento y la estabilidad de las redes existentes en tu empresa.' }
    ];

    return (
        <section id="services" className="services">
            <div className="services-line"></div> {/* Línea animada LED */}
            <h2>Servicios</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

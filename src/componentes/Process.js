import React from 'react';
import '../estilos/Process.css'; // Asegúrate de que la ruta sea correcta

const Process = () => {
    return (
        <section id="process" className="process">
            <h2>¿Cómo Lo Hacemos?</h2>
            <p>En 101 Networks, creemos que cada instalación de fibra óptica debe ser rápida, eficiente y sin interrupciones. Estos son los pasos de nuestro proceso:</p>
            <ol>
                <li><strong>Evaluación</strong> - Realizamos un análisis detallado de las necesidades de tu empresa.</li>
                <li><strong>Planificación</strong> - Creamos un plan de instalación personalizado que garantice la mínima interrupción de tus operaciones.</li>
                <li><strong>Instalación</strong> - Ejecutamos la instalación de fibra óptica de manera ágil y profesional.</li>
                <li><strong>Pruebas</strong> - Realizamos pruebas de velocidad y rendimiento para asegurar que todo esté funcionando al máximo.</li>
                <li><strong>Soporte Continuo</strong> - Ofrecemos soporte 24/7 para asegurar que tu conexión siempre esté activa y funcionando sin problemas.</li>
            </ol>
        </section>
    );
};

export default Process;
import React from 'react';
import '../estilos/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <p>© 2025 101 Networks. Todos los derechos reservados.</p>
                <p><a href="#privacy">Política de Privacidad</a> | <a href="#terms">Términos y Condiciones</a></p>
            </div>
            <div className="footer-info">
                <p><strong>Dirección:</strong> Calle Ficticia 123, Ciudad Imaginaria</p>
                <p><strong>Teléfono:</strong> +123 456 7890</p>
                <p><strong>Email:</strong> contacto@101networks.com</p>
                <p><strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                <p><strong>Redes Sociales:</strong>
                    <a href="#facebook">Facebook</a> |
                    <a href="#twitter">Twitter</a> |
                    <a href="#linkedin">LinkedIn</a>
                </p>
                <p><strong>Soporte Técnico:</strong> soporte@101networks.com</p>
            </div>
        </footer>
    );
}

export default Footer;
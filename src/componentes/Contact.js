import React from 'react';
import '../estilos/Contact.css';
import contactImage from '../assets/formulario.jpeg'; // Asegúrate de que el camino a tu imagen sea correcto

function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario
        alert("El formulario ha sido enviado. (Funcionalidad de correo quitada)"); // Mensaje de alerta para confirmar el envío
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-form-container">
                <h2>Contacto</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" placeholder="Tu nombre" required />

                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" placeholder="Tu correo" required />

                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" placeholder="Tu mensaje" required></textarea>

                    <button type="submit" className="submit-btn">Enviar</button>
                </form>
            </div>
            <div className="contact-image-container">
                <img src={contactImage} alt="Contacto" />
            </div>
        </section>
    );
}

export default Contact;
import React from 'react';
import '../estilos/Header.css';
import logo from '../assets/logo.jpg'; // Asegúrate de colocar el logo en esta ruta

const Header = () => {
  return (
      <header className="header">
        <nav className="nav">
          <a href="#home" className="logo">
            <img src={logo} alt="Logo 101 Networks" />
          </a>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Inicio</a></li>
            <li><a href="#services" className="nav-link">Servicios</a></li>
            <li><a href="#about" className="nav-link">Nosotros</a></li>
            <li><a href="#process" className="nav-link">Nuestro Proceso</a></li>
            <li><a href="#funfacts" className="nav-link">Datos Curiosos</a></li>
            <li><a href="#contact" className="nav-link">Contacto</a></li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;

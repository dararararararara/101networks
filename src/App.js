import React from 'react';
import './App.css';
import './estilos/Global.css';

import Header from './componentes/Header';
import Hero from './componentes/Hero';
import ServicesCard from './componentes/ServicesCard';
import About from './componentes/About';
import Process from './componentes/Process';
import FunFacts from './componentes/FunFacts';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <ServicesCard />
            <About />
            <Process />
            <FunFacts />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer'; 

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <MainSection />
      <Nosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </React.Fragment>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import fondo from '../components/assets/fondo.svg';
import '../styles/mainsection.css';

const MainSection = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    const contactoSection = document.getElementById('contacto');
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="inicio" className="main-content">
      <img src={fondo} alt="fondo" className="background-image" />
      <h1 className="title">Diseño y Construcción Arquitectónica.</h1>
      <h2 className="subtitle">Si estás buscando una empresa de construcción y arquitectura confiable y profesional.
        <br /> Contáctanos hoy mismo para obtener más información sobre nuestros servicios.
        <br /> Estaremos encantados de ayudarte a hacer realidad tu proyecto de construcción o remodelación.
      </h2>
      <button className="custom-button-contactanos" onClick={scrollToContact}>Contáctanos</button>
      <div className="social-icons">
        <a href="https://instagram.com/madarquitectura.ok?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer">
          <span className="social-icon"><FaInstagram /></span>
        </a>
        <a href="mailto:madarquitectura.estudio@gmail.com" target="_blank" rel="noopener noreferrer">
          <span className="social-icon"><FaEnvelope /></span>
        </a>
        <a href="https://www.facebook.com/MadArquitectura.estudio" target="_blank" rel="noopener noreferrer">
          <span className="social-icon"><FaFacebook /></span>
        </a>
      </div>
      <div className="whatsapp-container" title='abrir-whatsapp-bussines'>
        <a href="https://wa.me/2254616834" target="_blank">
          <button className="whatsapp-button" title="Abrir en Elementos"><FaWhatsapp /></button>
        </a>
      </div>
      {showArrow && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default MainSection;

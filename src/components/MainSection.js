import React from 'react';
import { FaArrowRight, FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import fondo from '../components/assets/fondo.svg';
import '../styles/mainsection.css';

const MainSection = () => {
  return (
    <div id="inicio" className="main-content">
      <img src={fondo} alt="fondo" className="background-image" />
      <h1 className="title">Diseño y Construcción Arquitectónica.</h1>
      <h2 className="subtitle">Si estás buscando una empresa de construcción y arquitectura confiable y profesional.
        <br /> Contáctanos hoy mismo para obtener más información sobre nuestros servicios.
        <br /> Estaremos encantados de ayudarte a hacer realidad tu proyecto de construcción o remodelación.
      </h2>
      <button className="custom-button">Contáctanos <FaArrowRight /></button>
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
      <div className="whatsapp-container">
        <a href="https://wa.me/2254616834" target="_blank">
          <button className="whatsapp-button"><FaWhatsapp /></button>
        </a>
      </div>
    </div>
  );
};

export default MainSection;

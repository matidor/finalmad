import React from 'react';
import '../styles/nosotros.css';
import quienesSomosImage from '../components/assets/quienes-somos.png';

const Nosotros = () => {
  return (
    <div id="nosotros" className="nosotros-section">
      <div className="nosotros-content">
        <div className="image-container">
          <img src={quienesSomosImage} alt="Imagen" />
        </div>
        <div className="text-container">
          <h2>Quienes Somos</h2>
          <div className="orange-line"></div> 
          <p>Bienvenido a Mad Arquitectura.

            En Mad Arquitectura, estamos comprometidos con dar forma a un mundo mejor mediante nuestra pasión por la arquitectura y la construcción. <br />
            <br />
            Nuestros valores fundamentales son la calidad, la sostenibilidad y la integridad. Nos esforzamos por superar constantemente los estándares establecidos en la industria y contribuir al desarrollo de comunidades sostenibles y resilientes. <br />
          </p>
        </div>
      </div>
      <div className="horizontal-div">
        <h2>Como lo hacemos</h2>
        <div className="orange-line"></div> 
        <p>En MAD Arquitectura, nuestra pasión es dar vida a las ideas y convertirlas en espacios arquitectónicos asombrosos y funcionales. <br /> 
            Desde nuestra fundación en 2010, hemos estado creando espacios inspiradores y funcionales que reflejan la identidad y las necesidades únicas de nuestros clientes. <br />
          <br />
          En cada proyecto que emprendemos, ponemos nuestra creatividad a trabajar para diseñar soluciones únicas y atractivas. <br />
          <br />
          Nuestro equipo de arquitectos y diseñadores  se esfuerza por comprender las necesidades y deseos de nuestros clientes para crear diseños personalizados que se adapten a su estilo de vida y reflejen su identidad.</p>
      </div>
    </div>
  );
};

export default Nosotros;


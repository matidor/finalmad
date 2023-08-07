import React from 'react';
import '../styles/contacto.css';
import backgroundImage from '../components/assets/imgservicios/contactpfondo.png';

const Contacto = () => {
  return (
    <div id="contacto" className="contacto-section">
      <div className="background-image-contact" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="formulario-container">
          {/* Aquí coloca el formulario con la clase "formulario" */}
          <div className="formulario">
            <form action="" className="form-contact">
              <div className="form-input">
                <input type="text" name="" id="" required />
                <label htmlFor="">Nombre</label>
              </div>
              <div className="form-input">
                <input type="text" name="" id="" required />
                <label htmlFor="">Email</label>
              </div>
              <div className="form-input">
                <input type="text" name="" id="" required />
                <label htmlFor="">Telefono</label>
              </div>
              <div className="form-input">
                <textarea name="" id="" cols="30" rows="10" required></textarea>
                <label htmlFor="">Mensaje</label>
              </div>
              <button id="btn-resume" className="btn btn-resume">
                <span>Enviar</span>
                <span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

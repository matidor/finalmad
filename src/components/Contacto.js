import React, { useState } from 'react';
import '../styles/contacto.css';
import backgroundImage from '../components/assets/imgservicios/contactpfondo.png';
import database from '../components/FirebaseConfig'; 

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    database.ref('mensajes').push({
      nombre,
      email,
      telefono,
      mensaje,
    });

    setNombre('');
    setEmail('');
    setTelefono('');
    setMensaje('');
  };

  return (
    <div id="contacto" className="contacto-section">
      <div className="background-image-contact" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="formulario-container">
          <div className="formulario">
            <form action="" className="form-contact" onSubmit={handleSubmit}>
              <div className="form-input">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
                <label htmlFor="nombre">Nombre</label>
              </div>
              <div className="form-input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-input">
                <input
                  type="tel"
                  name="telefono"
                  id="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
                <label htmlFor="telefono">Telefono</label>
              </div>
              <div className="form-input">
                <textarea
                  name="mensaje"
                  id="mensaje"
                  cols="30"
                  rows="10"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                ></textarea>
                <label htmlFor="mensaje">Mensaje</label>
              </div>
              <button id="btn-resume" className="btn btn-resume" type="submit">
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

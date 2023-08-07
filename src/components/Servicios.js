import React, { useState } from 'react';
import '../styles/servicios.css';
import 'font-awesome/css/font-awesome.min.css';
import serviciosData from './ServiciosData';

const Servicios = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const toggleExpand = (index) => {
        if (index === expandedIndex) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className="servicios-section">
            <div className="header-prefix">02/</div>
            <div className="header-title">NUESTROS SERVICIOS</div>
            {serviciosData.map((servicio, index) => (
                <div key={index} className={`servicio-item ${index === expandedIndex ? 'expanded' : ''}`}>
                    <img src={servicio.imgSrc} alt={servicio.title} />
                    <h3>{servicio.title}</h3>
                    <p>
                        {index === expandedIndex
                            ? servicio.description
                            : servicio.description.length > 100
                                ? servicio.description.substring(0, 100) + '...'
                                : servicio.description}
                    </p>

                    <button className='custom-button' onClick={() => toggleExpand(index)}>
                        {index === expandedIndex ? 'Cerrar' : 'Leer más'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Servicios;

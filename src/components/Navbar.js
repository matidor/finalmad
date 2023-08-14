import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../components/assets/logofin.png";
import "../styles/navbar.css"

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>

      <img src={logo} alt="Logo" className="logo-img" />

      <nav ref={navRef}>
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
        <button className="nav-btn nav-close-btn" title="abrir en elementos" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn" title="Cerrar navegación"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
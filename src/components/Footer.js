import React from "react";
import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logoImg from "../components/assets/logofinal.png";

const Footer = () => {
  return (
    <footer>
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <div className="contact-social">
                  <ul>
                    <li>
                      <a className="hover-target social-icon-footer" href="https://www.facebook.com/MadArquitectura.estudio">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a className="hover-target social-icon-footer" href="https://www.linkedin.com/in/maximiliano-andres-doro-b52a48111/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a className="hover-target social-icon-footer" href="https://instagram.com/madarquitectura.ok?igshid=NGExMmI2YTkyZg==">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-footer">
        <div className="row-copyrigth">
          <div className="copyrigth">
            <p>
              Copyright © 2023
              <img src={logoImg} alt="logo" className="logo-footer" />
              Todos los derechos reservados. <br />Creado y diseñado por github/matidor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;   
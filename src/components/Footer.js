import React from "react";
import "./Footer.css";
import logo from "../../src/images/logo2.png";


const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
            <div className="logo">
                <img src={logo} alt="" className="logo-g"/>
            </div>
            <div className="col">
              <ul className="list-unstyled">
                <ul>Para solicitar asesoría o para cualquier información adicional, no dude en contactarnos.</ul>
                <ul> (+57) 301 212 8137 </ul>
                <ul>info@gameratys.com </ul>
                <ul>Bogotá, Colombia </ul>
              </ul>
            </div>  
            <div className="col1">
              <ul className="list-unstyled">
                <ul >Inicio</ul>
                <ul>Empresas</ul>
                <ul>Personas</ul>
                <ul>Portafolio</ul>
                </ul>
            </div>   
        </div>
        <div className="col-sm2">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} | Todos los derechos reservados 
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;


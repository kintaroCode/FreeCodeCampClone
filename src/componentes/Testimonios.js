import React from "react";
import "../estilos/Testimonios.css";

function Testimonios(props) {
  return (
        <div className="contenedor-testimonios">
          <img  className="imagen-testimonio"
                src={require(`../imagenes/${props.imagen}.png`)} 
                alt="imagen de emma"/>
          <div className="contenedor-texto-textimonio">
            <p className="nombre-testimonio">
                <strong> {props.nombre} </strong> {props.pais}
            </p>
            <p className="cargo-testimonio"> {props.cargo} en <strong>{props.empresa}</strong></p>
            <p className="texto-testimonio">"{props.testimonios}" </p>
          </div>    
        </div>


  );
}

export default Testimonios;
import React from "react";
import "./hoja-de-estilo/Boton.css";

function Boton(props) {
        console.log(props);

        const esOperador = valor => {
                return isNaN(valor) && (valor !== '.') && (valor !== '=');
        };

         return (
         <div 
         className= {`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
          onClick={() => props.manejarClic(props.children)}>
           {props.children}

        </div>


         );

}

export default Boton;
import React from 'react';
import '../hojas-de-estilo/Boton.css';
function Boton({ texto, esBotonClic, manejarClic }) {
   return (
    <button
        className={esBotonClic ? 'boton-incre' : 'boton-dismi'}
        onClick={manejarClic}>
        {texto}
    </button>
   );

}

export default Boton;
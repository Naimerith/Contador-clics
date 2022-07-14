import React from 'react';
import '../hojasDeEstilos/Boton.css';

function Boton({ texto, esBotonDeClics, manejarClics }) {
  return (
    <button
      className={esBotonDeClics ? 'botonClics' : 'botonReiniciar'}
      onClick={manejarClics}>
      {texto}
    </button>
  )
}
export default Boton;
import React from 'react';

// textoBoton
// textoInput

function Formulario(props) {
  const textoInput = props.textoInput;

  return (
    <form>
      {textoInput} <input /> <button>{props.textoBoton}</button>
    </form>
  );
}

export default Formulario;
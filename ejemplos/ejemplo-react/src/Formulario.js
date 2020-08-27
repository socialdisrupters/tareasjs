import React, { useState } from 'react';

// textoBoton
// textoInput

function Formulario({ textoInput, textoBoton, agregarCompra }) {
  const [valorTexto, setValorTexto] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    agregarCompra({ nombre: valorTexto, comprado: false })
    setValorTexto('');
  }

  function actualizarTexto(e) {
    setValorTexto(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      {textoInput} <input value={valorTexto} onChange={actualizarTexto} /> <button type="submit">{textoBoton}</button>
    </form>
  );
}

export default Formulario;
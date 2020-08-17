import React from 'react';

function ListaDeCompras(props) {
  const cosas = props.cosas;

  const elementos = [];
  for (let i = 0; i < cosas.length; i++) {
    elementos.push(<li>{cosas[i].nombre}</li>); // JSX
  }

  return (
    <ul>
      {elementos}
    </ul>
  );
}

export default ListaDeCompras;
import React, { useState } from 'react';
import './App.css';
import ListaDeCompras from './ListaDeCompras';
import Formulario from './Formulario';

function App() {
  const [compras, setCompras] = useState([
    { nombre: 'Harina', comprado: false },
  ]);

  function agregarCompra(nuevaCompra) {
    setCompras(compras.concat(nuevaCompra))
  }

  //JSX
  //Fragmento
  return (
    <> 
      <h1>Lista de compras</h1>
      <Formulario agregarCompra={agregarCompra} textoBoton="Enviar" textoInput="Tengo que comprar: "/>
      <h2>Mi lista de compras:</h2>
      <ListaDeCompras cosas={compras} />
    </>
  );
}

export default App;

import React from 'react';
import './App.css';

import ListaDeCompras from './ListaDeCompras';
import Formulario from './Formulario';

const comprasSergio = [
  { nombre: 'Harina', comprado: false },
  { nombre: 'Café', comprado: false },
  { nombre: 'Refresco', comprado: false },
  { nombre: 'Agua', comprado: false },
  { nombre: 'Cerveza', comprado: false },
];

const comprasLuis = [
  { nombre: 'Leche', comprado: false },
  { nombre: 'Cereal', comprado: false },
];

const comprasPili = [
  { nombre: 'Jitomates', comprado: false },
  { nombre: 'Aguacate', comprado: false },
  { nombre: 'Agua', comprado: false },
  { nombre: 'Cerveza', comprado: false },
];

function App() {
  //JSX
  //Fragmento
  return (
    <> 
      <h1>Lista de compras</h1>
      <Formulario textoBoton="Enviar" textoInput="Tengo que comprar: "/>
      <h2>Mi lista de compras (Sergio):</h2>
      <ListaDeCompras cosas={comprasSergio} />

      <Formulario textoBoton="Agregar" textoInput="Comprar: "/>
      <h2>Mi lista de compras (Luis):</h2>
      <ListaDeCompras cosas={comprasLuis} />

      <h2>Mi lista de compras (Pili):</h2>
      <ListaDeCompras cosas={comprasPili} />
    </>
  );
}

export default App;

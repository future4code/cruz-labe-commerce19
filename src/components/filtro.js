import React from "react";
import "./filtro.css"; 

export default function App() {
  return (
    <div className="App">
      <div className="Caixa">
      <h3>Filtros</h3>
  <label class = "valor-minimo"> 
      <p>Valor Mínimo:</p>
      <input type={Number}></input>
  </label>

  <label class = "valor-maximo"> 
      <p>Valor Máximo:</p>
      <input type={Number}></input>
  </label>

  <label class = "valor-minimo"> 
      <p>Busca por nome:</p>
      <input type={Text}></input>
  </label>

    </div>
    </div>
  );
}
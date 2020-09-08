import React, { useState } from "react";
import "../style.css";

const Menu = (props) => {
  const [active, setAtive] = useState(1);
  return (
    <nav className="menuContainer">
      <ul>
        <span
          className={active===1?'menuProduccionprimaria activeNavTabPanel':'menuProduccionprimaria'}
          onClick={() => {
            setAtive(1)
            props.screen("forestalPrimario");
          }}
        >
          Forestal Primario
        </span>
      </ul>
      <ul>
        <span
          className={active===2?'menuProduccionprimaria activeNavTabPanel':'menuProduccionprimaria'}
          onClick={() => {
            setAtive(2)
            props.screen("stockBovinoPorcino");
          }}
        >
          Stock BovinoPorcino
        </span>
      </ul>

      <ul>
        <span
          className={active===3?'menuProduccionprimaria activeNavTabPanel':'menuProduccionprimaria'}
          onClick={() => {
            setAtive(3)
            props.screen("preciosAgroDiarios");
          }}
        >
          Precios Agros Diarios
        </span>
      </ul>

      <ul>
        <span
         className={active===4?'menuProduccionprimaria activeNavTabPanel':'menuProduccionprimaria'}
          onClick={() => {
            setAtive(4)
            props.screen("preciosAgroMensuales");
          }}
        >
          Precios Agros Mensuales
        </span>
      </ul>

      <ul>
        <span
          className={active===5?'menuProduccionprimaria activeNavTabPanel':'menuProduccionprimaria'}
          onClick={() => {
            setAtive(5)
            props.screen("preciosGanaderos");
          }}
        >
          Precios Ganaderos
        </span>
      </ul>

      <ul>
        <span
          className={active===6?'menuProduccionprimaria activeNavTabPanel':'menuProduccionprimaria'}
          onClick={() => {
            setAtive(6)
            props.screen("faena");
          }}
        >
          Faena
        </span>
      </ul>
    </nav>
  );
};

export default Menu;

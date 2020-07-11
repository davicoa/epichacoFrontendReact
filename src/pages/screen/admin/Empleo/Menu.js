import React, { useState } from "react";
import "../style.css";

const Menu = (props) => {
  const [active, setAtive] = useState(1);
  return (
    <nav className="menuContainer">
      <ul>
        <span
          className={
            active === 1
              ? "menuProduccionprimaria activeNavTabPanel"
              : "menuProduccionprimaria"
          }
          onClick={() => {
            setAtive(1);
            props.screen("");
          }}
        >
          Indicadores Laborales
        </span>
      </ul>
      <ul>
        <span
          className={
            active === 2
              ? "menuProduccionprimaria activeNavTabPanel"
              : "menuProduccionprimaria"
          }
          onClick={() => {
            setAtive(2);
            props.screen("EmpleoGeneral");
          }}
        >
          Empleo General
        </span>
      </ul>
      <ul>
        <span
          className={
            active === 3
              ? "menuProduccionprimaria activeNavTabPanel"
              : "menuProduccionprimaria"
          }
          onClick={() => {
            setAtive(3);
            props.screen("EmpleoIERIC");
          }}
        >
          Empleo IERIC
        </span>
      </ul>
      <ul>
        <span
          className={
            active === 4
              ? "menuProduccionprimaria activeNavTabPanel"
              : "menuProduccionprimaria"
          }
          onClick={() => {
            setAtive(4);
            props.screen("PobrezaIndigencia");
          }}
        >
          Pobreza/Indigencia
        </span>
      </ul>
    </nav>
  );
};

export default Menu;

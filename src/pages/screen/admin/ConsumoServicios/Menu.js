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
          IPC-GR RESIS
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
            props.screen("Cemento");
          }}
        >
          Cemento
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
            props.screen("Combustible");
          }}
        >
          Combustible
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
            props.screen("Supermercado");
          }}
        >
          Supermercado
        </span>
      </ul>

      <ul>
        <span
          className={
            active === 5
              ? "menuProduccionprimaria activeNavTabPanel"
              : "menuProduccionprimaria"
          }
          onClick={() => {
            setAtive(5);
            props.screen("Vehiculo");
          }}
        >
          Vehículo
        </span>
      </ul>
    </nav>
  );
};

export default Menu;

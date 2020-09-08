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
            props.screen("ipcgrResis");
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
            props.screen("cemento");
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
            props.screen("combustible");
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
            props.screen("supermercado");
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
            props.screen("vehiculo");
          }}
        >
          Vehículo
        </span>
      </ul>
    </nav>
  );
};

export default Menu;

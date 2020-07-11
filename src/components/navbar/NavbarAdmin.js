import React, { useState } from "react";
import "./style.css";

const NavbarAdmin = (props) => {
  const [active, setAtive] = useState(0);
  return (
    <nav className="navbarContainer">
      <ul
        className={active === 1 ? "activeNavTab" : ""}
        onClick={() => {
          setAtive(1);
          props.screen("produccionprimaria");
        }}
      >
        <span>Produccion Primaria</span>
      </ul>
      <span>|</span>
      <ul
        className={active === 2 ? "activeNavTab" : ""}
        onClick={() => {
          setAtive(2);
          props.screen("produccionindustrial");
        }}
      >
        <span>Produccion Industrial</span>
      </ul>
      <span>|</span>
      <ul
        className={active === 3 ? "activeNavTab" : ""}
        onClick={() => {
          setAtive(3);
          props.screen("imach");
        }}
      >
        <span>Imach</span>
      </ul>
      <span>|</span>
      <ul
        className={active === 4 ? "activeNavTab" : ""}
        onClick={() => {
          setAtive(4);
          props.screen("empleo");
        }}
      >
        <span>Empleo</span>
      </ul>
      <span>|</span>
      <ul
        className={active === 5 ? "activeNavTab" : ""}
        onClick={() => {
          setAtive(5);
          props.screen("consumoServicios");
        }}
      >
        <span>Consumo/Servicios</span>
      </ul>
    </nav>
  );
};

export default NavbarAdmin;

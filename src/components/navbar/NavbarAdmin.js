import React, { useState, Fragment } from "react";
import "./style.css";
const user = JSON.parse(localStorage.getItem("user"));

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
      {user.roles.some((role) => role === "ROLE_ADMIN") && (<Fragment>
        
          <span>|</span>
          <ul
            className={active === 6 ? "activeNavTab" : ""}
            onClick={() => {
              setAtive(6);
              props.screen("administrarUsuarios");
            }}
          >
            <span>Administrar Usuarios</span>
          </ul>
          </Fragment>
      )}
    </nav>
  );
};

export default NavbarAdmin;

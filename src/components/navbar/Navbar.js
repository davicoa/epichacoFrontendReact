import React, { useState } from "react";
import "./style.css";

const Navbar = (props) => {
  const [active, setAtive] = useState(0);
  const [activeSubTab, setAtiveSubTab] = useState('');
  return (
    <nav className="navbarContainer">
      <ul
        className={active === 0 ? "activeNavTab" : ""}
        onClick={() => {
          setAtive(0);
          props.screen("");
        }}
      >
        <span>Monitor</span>
      </ul>
      <span>|</span>
      <ul className={active === 1 ? "activeNavTab" : ""}>
        <div class="dropdown">
          Producción
          <div class="dropdown-content">
            <span
                className={active === 0 ? "activeNavTab" : ""}
                onClick={() => {
                    props.navEmbedHandler("Producción Ganadera");
                    props.screen("produccion");
                    setAtive(1);
                }}
            >
              Producción Ganadera
            </span>
            <span onClick={() => props.navEmbedHandler("Producción Agrícola")}>
              Producción Agrícola
            </span>
          </div>
        </div>
      </ul>
      <span>|</span>
      <ul>Industria</ul>
      <span>|</span>
      <ul>Empleo</ul>
      <span>|</span>
      <ul>Comercio</ul>
      <span>|</span>
      <ul>Construcción</ul>
      <span>|</span>
      <ul>Mas...</ul>
    </nav>
  );
};

export default Navbar;

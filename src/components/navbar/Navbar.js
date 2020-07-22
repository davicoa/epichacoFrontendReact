import React, { useState } from "react";
import "./style.css";

const Navbar = (props) => {
  const [active, setAtive] = useState(0);
  const [activeSubTab, setAtiveSubTab] = useState(0);
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
      <ul className={active === 1 ? "activeNavTab dropdown" : "dropdown"}>
        <div>
          Producción
          <div className="dropdown-content">
            <span
              className={activeSubTab === 100 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler("https://historial.com.ar/", 'Producción Ganadera');
                props.screen("produccion");
                setAtiveSubTab(100)
                setAtive(1);
              }}
            >
              Producción Ganadera
            </span>
            <span
              className={activeSubTab === 101 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler("https://stackoverflow.com/questions/33913737/inserting-the-iframe-into-react-component", 'Producción Agrícola');
                props.screen("produccion");
                setAtiveSubTab(101)
                setAtive(1);
              }}
            >
              Producción Agrícola
            </span>
            <span
              className={activeSubTab === 102 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler("https://historial.com.ar/producto/SO2139324", 'Forestal Primaria');
                props.screen("produccion");
                setAtiveSubTab(102)
                setAtive(1);
              }}
            >
              Forestal Primaria
            </span>
            <span
              className={activeSubTab === 103 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler("Precios Forestales", 'Precios Forestales');
                props.screen("produccion");
                setAtiveSubTab(103)
                setAtive(1);
              }}
            >
              Precios Forestales
            </span>
            <span
              className={activeSubTab === 104 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler("Precios Arícolas", 'Precios Arícolas');
                props.screen("produccion");
                setAtiveSubTab(104)
                setAtive(1);
              }}
            >
              Precios Arícolas
            </span>
            <span
              className={activeSubTab === 105 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler("Otros Precios Arícolas", 'Otros Precios Arícolas');
                props.screen("produccion");
                setAtiveSubTab(105)
                setAtive(1);
              }}
            >
              Otros Precios Arícolas
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

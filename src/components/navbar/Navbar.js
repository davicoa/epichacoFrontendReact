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
                props.navEmbedHandler("https://app.powerbi.com/view?r=eyJrIjoiZGViNGUwZmEtYTgzNC00YWU3LWI4NWYtNWE4MmY3MzliZWQxIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9", 'Producción Ganadera');
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
                props.navEmbedHandler("https://app.powerbi.com/view?r=eyJrIjoiMTgxOTU4N2QtMGUyMS00YmIxLWE1Y2YtYTkyZTFlZWY0ZTliIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9", 'Producción Agrícola');
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
                props.navEmbedHandler("https://app.powerbi.com/view?r=eyJrIjoiM2FjNjQ4YjYtNzQ2NS00Y2VmLTlhMzQtZmQ5NjVkNDQyZmI5IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9", 'Forestal Primaria');
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
                props.navEmbedHandler("https://app.powerbi.com/view?r=eyJrIjoiNmViNDEwMDYtMDU0ZC00ZmVmLTg1ZjAtMjFiMDM3MjA4N2I1IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9", 'Precios Forestales');
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
                props.navEmbedHandler("https://app.powerbi.com/view?r=eyJrIjoiYWIyZDVlMWYtZmE1ZC00NTM4LWJkM2QtNzJlMzAyYWIyMzg0IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9", 'Precios Arícolas');
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
                props.navEmbedHandler("https://app.powerbi.com/view?r=eyJrIjoiNmNjMDQ2MTYtY2UzNi00MDkyLTliNzktYTkxYTQ1MDk0MDM5IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9", 'Otros Precios Arícolas');
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

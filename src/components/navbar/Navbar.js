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
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiZGViNGUwZmEtYTgzNC00YWU3LWI4NWYtNWE4MmY3MzliZWQxIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Producción Ganadera"
                );
                props.screen("produccion");
                setAtiveSubTab(100);
                setAtive(1);
              }}
            >
              Producción Ganadera
            </span>
            <span
              className={activeSubTab === 101 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiMTgxOTU4N2QtMGUyMS00YmIxLWE1Y2YtYTkyZTFlZWY0ZTliIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Producción Agrícola"
                );
                props.screen("produccion");
                setAtiveSubTab(101);
                setAtive(1);
              }}
            >
              Producción Agrícola
            </span>
            <span
              className={activeSubTab === 102 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiM2FjNjQ4YjYtNzQ2NS00Y2VmLTlhMzQtZmQ5NjVkNDQyZmI5IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Forestal Primaria"
                );
                props.screen("produccion");
                setAtiveSubTab(102);
                setAtive(1);
              }}
            >
              Forestal Primaria
            </span>
            <span
              className={activeSubTab === 103 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiNmViNDEwMDYtMDU0ZC00ZmVmLTg1ZjAtMjFiMDM3MjA4N2I1IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Precios Forestales"
                );
                props.screen("produccion");
                setAtiveSubTab(103);
                setAtive(1);
              }}
            >
              Precios Forestales
            </span>
            <span
              className={activeSubTab === 104 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiYWIyZDVlMWYtZmE1ZC00NTM4LWJkM2QtNzJlMzAyYWIyMzg0IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Precios Arícolas"
                );
                props.screen("produccion");
                setAtiveSubTab(104);
                setAtive(1);
              }}
            >
              Precios Arícolas
            </span>
            <span
              className={activeSubTab === 105 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiNmNjMDQ2MTYtY2UzNi00MDkyLTliNzktYTkxYTQ1MDk0MDM5IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Otros Precios Arícolas"
                );
                props.screen("produccion");
                setAtiveSubTab(105);
                setAtive(1);
              }}
            >
              Otros Precios Arícolas
            </span>
          </div>
        </div>
      </ul>
      <span>|</span>
      <ul className={active === 2 ? "activeNavTab dropdown" : "dropdown"}>
        <div>
          Industria
          <div className="dropdown-content">
            <span
              className={activeSubTab === 106 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiNmViNDEwMDYtMDU0ZC00ZmVmLTg1ZjAtMjFiMDM3MjA4N2I1IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Actividad Industrial"
                );
                props.screen("produccion");
                setAtiveSubTab(106);
                setAtive(2);
              }}
            >
              Actividad Industrial
            </span>
            <span
              className={activeSubTab === 107 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiYWIyZDVlMWYtZmE1ZC00NTM4LWJkM2QtNzJlMzAyYWIyMzg0IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Foresto Industrial"
                );
                props.screen("produccion");
                setAtiveSubTab(107);
                setAtive(2);
              }}
            >
              Foresto Industrial
            </span>
            <span
              className={activeSubTab === 108 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiNmNjMDQ2MTYtY2UzNi00MDkyLTliNzktYTkxYTQ1MDk0MDM5IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Faena"
                );
                props.screen("produccion");
                setAtiveSubTab(108);
                setAtive(2);
              }}
            >
              Faena
            </span>
          </div>
        </div>
      </ul>
      <span>|</span>
      <ul className={active === 3 ? "activeNavTab dropdown" : "dropdown"}>
        <div>
          Empleo
          <div className="dropdown-content">
            <span
              className={activeSubTab === 109 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiNmViNDEwMDYtMDU0ZC00ZmVmLTg1ZjAtMjFiMDM3MjA4N2I1IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Salario"
                );
                props.screen("produccion");
                setAtiveSubTab(109);
                setAtive(3);
              }}
            >
              Salario
            </span>
            <span
              className={activeSubTab === 110 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiYWIyZDVlMWYtZmE1ZC00NTM4LWJkM2QtNzJlMzAyYWIyMzg0IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Empleo"
                );
                props.screen("produccion");
                setAtiveSubTab(110);
                setAtive(3);
              }}
            >
              Empleo
            </span>
            <span
              className={activeSubTab === 111 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiNmNjMDQ2MTYtY2UzNi00MDkyLTliNzktYTkxYTQ1MDk0MDM5IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Empresas empleadoras"
                );
                props.screen("produccion");
                setAtiveSubTab(111);
                setAtive(3);
              }}
            >
              Empresas empleadoras
            </span>
            <span
              className={activeSubTab === 112 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiNmViNDEwMDYtMDU0ZC00ZmVmLTg1ZjAtMjFiMDM3MjA4N2I1IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Empleados promedio"
                );
                props.screen("produccion");
                setAtiveSubTab(112);
                setAtive(3);
              }}
            >
              Empleados promedio
            </span>
            <span
              className={activeSubTab === 113 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiYWIyZDVlMWYtZmE1ZC00NTM4LWJkM2QtNzJlMzAyYWIyMzg0IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Indicadores laborales"
                );
                props.screen("produccion");
                setAtiveSubTab(113);
                setAtive(3);
              }}
            >
              Indicadores laborales
            </span>
            <span
              className={activeSubTab === 114 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiNmNjMDQ2MTYtY2UzNi00MDkyLTliNzktYTkxYTQ1MDk0MDM5IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Convenios de Corresponsabilidad Gremial"
                );
                props.screen("produccion");
                setAtiveSubTab(114);
                setAtive(3);
              }}
            >
              CCG
            </span>
            <span
              className={activeSubTab === 115 ? "activeNavTab" : ""}
              onClick={() => {
                props.navEmbedHandler(
                  "https://app.powerbi.com/view?r=eyJrIjoiYWIyZDVlMWYtZmE1ZC00NTM4LWJkM2QtNzJlMzAyYWIyMzg0IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                  "Call Center"
                );
                props.screen("produccion");
                setAtiveSubTab(115);
                setAtive(3);
              }}
            >
              Call Center
            </span>
          </div>
        </div>
      </ul>
      <span>|</span>
      <ul className={active === 4 ? "activeNavTab dropdown" : "dropdown"}>
        Comercio
      </ul>
      <span>|</span>
      <ul className={active === 5 ? "activeNavTab dropdown" : "dropdown"}>
        Construcción
      </ul>
      <span>|</span>
      <ul className={active === 6 ? "activeNavTab dropdown" : "dropdown"}>
        Mas...
      </ul>
    </nav>
  );
};

export default Navbar;

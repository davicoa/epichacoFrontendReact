import React, { useState } from "react";
import "./style.css";

const Navbar = (props) => {
  const [active, setAtive] = useState(0);
  const [activeSubTab, setAtiveSubTab] = useState(0);
  return (
    <div className="navContainer">
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
                    "https://app.powerbi.com/view?r=eyJrIjoiNGU2NWRhZmEtMjU5OS00MDJjLTkxODQtMzRkZWUwZWJjMjY0IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
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
                    "https://app.powerbi.com/view?r=eyJrIjoiY2FiYmJmYmYtZWQwOS00YjE1LTgxOGUtMzZlY2YwMWVmNTlhIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
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
                    "https://app.powerbi.com/view?r=eyJrIjoiNzJhOWY4ZjItNmI0MS00Y2I0LWEyZWQtNTE5MDZhMjg3ZTI5IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
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
                    "https://app.powerbi.com/view?r=eyJrIjoiMTRmMjRlN2YtZjg2Mi00M2MxLWIyZmMtMjYyY2JlZGQ3MWMwIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
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
                    "https://app.powerbi.com/view?r=eyJrIjoiM2FhODVhMzUtY2YxMS00MGFmLTg1ZDAtZDdiZTkzMDU4ZjM2IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
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
                    "https://app.powerbi.com/view?r=eyJrIjoiYzM2ODVhMTEtNzRlOS00NmViLThkOTItMmY1OTU0MDhkOGFjIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
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
                    "https://app.powerbi.com/view?r=eyJrIjoiODdkYmJhZGItNDI3Yy00YzU3LTg5OTItZGE4MzhiYTdmZTVkIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
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
                    "https://app.powerbi.com/view?r=eyJrIjoiYzExYzQyYTMtM2ZhOC00NDY1LWFjMDAtYzU0MjA1YzI2OWQ1IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
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
                    "https://app.powerbi.com/view?r=eyJrIjoiYTk3OTNjYTItYTdiYS00NmE3LTlkYWEtODMzZDI2MTE2MDIyIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
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
                    "https://app.powerbi.com/view?r=eyJrIjoiMTc5NDBhNjUtZmRmYy00ZTk2LTllOGMtZmI0MDg4ODQ5Y2NhIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
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
          <div>
            Comercio
          <div className="dropdown-content">
              <span
                className={activeSubTab === 120 ? "activeNavTab" : ""}
                onClick={() => {
                  props.navEmbedHandler(
                    "https://app.powerbi.com/view?r=eyJrIjoiZWYzNDg0NmItN2IzNy00YzAzLWI0YmQtY2E0YTQzY2MzYzBlIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                    "Índice de Precios al Consumidor"
                  );
                  props.screen("produccion");
                  setAtiveSubTab(120);
                  setAtive(4);
                }}
              >
                IPC
            </span>
              <span
                className={activeSubTab === 121 ? "activeNavTab" : ""}
                onClick={() => {
                  props.navEmbedHandler(
                    "https://app.powerbi.com/view?r=eyJrIjoiYTllZWZkMjQtZWU1Yi00MzFiLTgyNGMtMDQ1MjRiMDI4NGZiIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                    "Evolución IPC - Gran Resistencia"
                  );
                  props.screen("produccion");
                  setAtiveSubTab(121);
                  setAtive(4);
                }}
              >
                Evolución IPC - GR
            </span>
              <span
                className={activeSubTab === 122 ? "activeNavTab" : ""}
                onClick={() => {
                  props.navEmbedHandler(
                    "https://app.powerbi.com/view?r=eyJrIjoiMDdlMDcxMjctYzQxNi00ZjYxLWI5NjUtMDUzMDk0ZTE3MzdkIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                    "Ventas de Supermercados"
                  );
                  props.screen("produccion");
                  setAtiveSubTab(122);
                  setAtive(4);
                }}
              >
                Ventas de Supermercados
            </span>
            </div>
          </div>
        </ul>
        <span>|</span>
        <ul className={active === 5 ? "activeNavTab dropdown" : "dropdown"}>
          <div>
            Construcción
          <div className="dropdown-content">
              <span
                className={activeSubTab === 130 ? "activeNavTab" : ""}
                onClick={() => {
                  props.navEmbedHandler(
                    "https://app.powerbi.com/view?r=eyJrIjoiMmZhNjc4ZDEtZGQ4Yy00MzViLTgyYzAtYzk1YWMzZWEwNTY3IiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                    "Índice de Costo de la Construcción"
                  );
                  props.screen("produccion");
                  setAtiveSubTab(130);
                  setAtive(5);
                }}
              >
                ICC
            </span>
              <span
                className={activeSubTab === 131 ? "activeNavTab" : ""}
                onClick={() => {
                  props.navEmbedHandler(
                    "https://app.powerbi.com/view?r=eyJrIjoiMjQwOGI1YzUtYjU0Yi00MjNmLTg5ODUtMmE3NmU1ZGQzMmEwIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                    "Cemento - total"
                  );
                  props.screen("produccion");
                  setAtiveSubTab(131);
                  setAtive(5);
                }}
              >
                Cemento
            </span>
              <span
                className={activeSubTab === 132 ? "activeNavTab" : ""}
                onClick={() => {
                  props.navEmbedHandler(
                    "https://app.powerbi.com/view?r=eyJrIjoiZmY4MjY0NTYtZWRiZC00MDE0LTk2YTEtMGI0M2E1ZjdjOGZmIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                    "UVI - UVA"
                  );
                  props.screen("produccion");
                  setAtiveSubTab(132);
                  setAtive(5);
                }}
              >
                UVI - UVA
            </span>
            </div>
          </div>
        </ul>
        <span>|</span>
        <ul className={active === 6 ? "activeNavTab dropdown" : "dropdown"}>
          <div>
            Mas...
          <div className="dropdown-content">
              <span
                className={activeSubTab === 140 ? "activeNavTab" : ""}
                onClick={() => {
                  props.navEmbedHandler(
                    "https://app.powerbi.com/view?r=eyJrIjoiNzY0ODBiY2ItOTQyNy00NWUyLWI0YjktZjk3ZGVjOTBkNGRmIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                    "IMACH"
                  );
                  props.screen("produccion");
                  setAtiveSubTab(140);
                  setAtive(6);
                }}
              >
                IMACH
            </span>
              <span
                className={activeSubTab === 141 ? "activeNavTab" : ""}
                onClick={() => {
                  props.navEmbedHandler(
                    "https://app.powerbi.com/view?r=eyJrIjoiMzQ5YTQzMjMtMzA4Ni00ZTAxLTg3NWEtMzlkM2E4ODA3MDkzIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                    "Combustible"
                  );
                  props.screen("produccion");
                  setAtiveSubTab(141);
                  setAtive(6);
                }}
              >
                Combustible
            </span>
              <span
                className={activeSubTab === 142 ? "activeNavTab" : ""}
                onClick={() => {
                  props.navEmbedHandler(
                    "https://app.powerbi.com/view?r=eyJrIjoiMTYyMzFhN2QtNzk4ZC00ZThkLThhOWQtYTM0M2E5N2ZlOWMxIiwidCI6ImQ5ZGMxNmQ2LWU3MWUtNGUxNi1hYTEyLWQ1OGY3ZDVmZDE5ZiJ9",
                    "Patentamientos y transferencias de vehículos"
                  );
                  props.screen("produccion");
                  setAtiveSubTab(142);
                  setAtive(6);
                }}
              >
                Autos Y Motos
            </span>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

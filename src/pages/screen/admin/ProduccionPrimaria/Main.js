import React, { useState } from "react";
import Menu from "./Menu";
import Faena from "./Vistas/Faena";
import ForestalPrimario from "./Vistas/ForestalPrimario";
import PreciosAgrosDiarios from "./Vistas/PreciosAgrosDiarios";
import PreciosAgrosMensuales from "./Vistas/PreciosAgrosMensuales";
import PreciosGanaderos from "./Vistas/PreciosGanaderos";
import StockBovinoPorcino from "./Vistas/StockBovinoPorcino";
import "react-datepicker/dist/react-datepicker.css";
import "../style.css";

const Main = () => {
  const [screen, setScreen] = useState("");

  const saveToDb = async (e) => {
    e.preventDefault();
    const rawResponse = await fetch(
      "http://127.0.0.1:4000/api/produccionPrimaria",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({}),
      }
    );
  };

  const screenHandler = (val) => {
    setScreen(val);
  };
  return (
    <div className="mainContainer">
      <div className="mainMenu">
        <div>
          <Menu screen={screenHandler} />
        </div>
      </div>
      <div className="mainForm">
        <div>
          {screen === "StockBovinoPorcino" ? (
            <StockBovinoPorcino />
          ) : screen === "PreciosAgrosDiarios" ? (
            <PreciosAgrosDiarios />
          ) : screen === "PreciosAgrosMensuales" ? (
            <PreciosAgrosMensuales />
          ) : screen === "PreciosGanaderos" ? (
            <PreciosGanaderos />
          ) : screen === "Faena" ? (
            <Faena />
          ) : (
            <ForestalPrimario />
          )}
        </div>
      </div>
    </div>
  );
};
export default Main;

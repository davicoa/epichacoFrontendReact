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
import AdminService from "services/AdminService";

const Main = () => {
  const [screen, setScreen] = useState("");
  const [loading, setLoading] = useState(false);

  const saveToDb = async (route, body)  => {
    setLoading(true)
    await AdminService.adminPost(route ,body)
    setLoading(false)
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
            <ForestalPrimario 
              saveToDb={saveToDb} 
              loading = {loading}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Main;

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

import ListView from "components/listView/ListView";
import ClipLoader from "react-spinners/ClipLoader";
import listaIcon from "images/icons-lista.png";
import masIcon from "images/icons-mas.png";
import { useAlert } from "react-alert";

let formActual = ForestalPrimario;

const Main = () => {
  const [screen, setScreen] = useState("forestalPrimario");
  const [loading, setLoading] = useState(false);
  const [lista, setLista] = useState(false);
  const [datalist, setDatalist] = useState();
  const alert = useAlert();


  const saveToDb = async (route, body) => {
    setLoading(true);
    const res = await AdminService.adminPost(route, body);
    if (res.status === 200) {
      alert.success(res.data.msg);
    } else {
      alert.error(res.data.msg);
    }
    setLoading(false);
  };
  const loadListHandler = async () => {
    setLoading(true);
    const res = await AdminService.adminGet(screen);
    setDatalist(res.data);
    setLoading(false);
  };
  const screenHandler = (val) => {
    switch (val) {
      case "forestalPrimario":
        formActual = ForestalPrimario;
        break;
      case "stockBovinoPorcino":
        formActual = StockBovinoPorcino;
        break;
      case "preciosAgroDiarios":
        formActual = PreciosAgrosDiarios;
        break;
      case "preciosAgroMensuales":
        formActual = PreciosAgrosMensuales;
        break;
      case "preciosGanaderos":
        formActual = PreciosGanaderos;
        break;
      case "faena":
        formActual = Faena;
        break;
      default:
        break;
    }
    setScreen(val);
    setLista(false);
  };
  return (
    <div className="mainContainer">
      <div className="mainMenu">
        <div>
          <Menu screen={screenHandler} />
        </div>
      </div>
      <div className="mainForm">
        <div className="tabButtonsConstent">
          <span
            className="tabButtons"
            onClick={() => {
              loadListHandler();
              setLista(true);
            }}
          >
            <img src={listaIcon} alt="" height="auto" width="25%"></img>
          </span>
          <span onClick={() => setLista(false)} className="tabButtons">
            <img src={masIcon} alt="" height="auto" width="25%"></img>
          </span>
        </div>
        {loading ? (
          <div className="ClipLoader">
            <ClipLoader
              css={("display: block", "margin: 0 auto", "border-color: blue")}
              size={150}
              color={"#123abc"}
              loading={loading}
            />
          </div>
        ) : (
            <div>
              {lista ? (
                <ListView
                  reload={loadListHandler}
                  rawData={datalist}
                  route={screen}
                  formToEdit={formActual}
                />
              ) : (
                  <div>
                    {screen === "forestalPrimario" && (
                      <ForestalPrimario saveToDb={saveToDb} />
                    )}
                    {screen === "stockBovinoPorcino" && (
                      <StockBovinoPorcino saveToDb={saveToDb} />
                    )}
                    {screen === "preciosAgroDiarios" && (
                      <PreciosAgrosDiarios saveToDb={saveToDb} />
                    )}
                    {screen === "preciosAgroMensuales" && (
                      <PreciosAgrosMensuales saveToDb={saveToDb} />
                    )}
                    {screen === "preciosGanaderos" && (
                      <PreciosGanaderos saveToDb={saveToDb} />
                    )}
                    {screen === "faena" && (
                      <Faena saveToDb={saveToDb} />
                    )}
                  </div>
                )}
            </div>
          )}
      </div>
    </div>
  );
};
export default Main;

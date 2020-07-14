import React, { useState } from "react";
import Menu from "./Menu";
import ListView from "components/listView/ListView";
import IndicadoresLaborales from "../Empleo/Vistas/IndicadoresLaborales";
import EmpleoGeneral from "../Empleo/Vistas/EmpleoGeneral";
import Empleoieric from "../Empleo/Vistas/Empleoieric";
import PobrezaIndigencia from "../Empleo/Vistas/PobrezaIndigencia";
import ClipLoader from "react-spinners/ClipLoader";

import "react-datepicker/dist/react-datepicker.css";
import "../style.css";
import AdminService from "services/AdminService";

const Main = () => {
  const [screen, setScreen] = useState("indicadoresLaborales");
  const [lista, setLista] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsd] = useState("");
  const [datalist, setDatalist] = useState();

  const saveToDb = async (route, body) => {
    setLoading(true);
    const res = await AdminService.adminPost(route, body);
    setMsd(res);
    setLoading(false);
  };

  const loadListHandler = async () => {
    setLoading(true);
    const res = await AdminService.adminGet(screen);
    setDatalist(res.data)
    setLoading(false);
  };

  const screenHandler = (val) => {
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
            lista
          </span>
          <span onClick={() => setLista(false)} className="tabButtons">
            add
          </span>
        </div>
        {loading ? (
          <ClipLoader
            css={("display: block", "margin: 0 auto", "border-color: blue")}
            size={150}
            color={"#123abc"}
            loading={loading}
          />
        ) : (
          <div>
            {lista ? (
              <ListView 
                dataRaw ={datalist}/>
            ) : (
              <div>
                {screen === "indicadoresLaborales" && (
                  <IndicadoresLaborales saveToDb={saveToDb} msg={msg} />
                )}
                {screen === "empleoGeneral" && (
                  <EmpleoGeneral saveToDb={saveToDb} msg={msg} />
                )}
                {screen === "empleoIERIC" && (
                  <Empleoieric saveToDb={saveToDb} msg={msg} />
                )}
                {screen === "pobrezaIndigencia" && (
                  <PobrezaIndigencia saveToDb={saveToDb} msg={msg} />
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

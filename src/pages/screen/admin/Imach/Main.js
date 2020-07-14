import React, { useState } from "react";
import Menu from "./Menu";
import IMACH from "../Imach/Vistas/Imach";
import ListView from "components/listView/ListView"
import "react-datepicker/dist/react-datepicker.css";
import "../style.css";
import AdminService from "services/AdminService";

const Main = () => {
  const [screen, setScreen] = useState("");
  const [lista, setLista] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsd] = useState("");

  const saveToDb = async (route, body) => {
    setLoading(true);
    const res = await AdminService.adminPost(route, body);
    setMsd(res);
    setLoading(false);
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
        <div className="tabButtonsConstent">
          <span onClick={() => setLista(true)} className="tabButtons">
            lista
          </span>
          <span onClick={() => setLista(false)} className="tabButtons">
            add
          </span>
        </div>

        <div>
          {lista ? (
            <ListView />
          ) : (
            screen === "" && (
              <IMACH saveToDb={saveToDb} loading={loading} msg={msg} />
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default Main;

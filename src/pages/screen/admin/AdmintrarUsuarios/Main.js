import React, { useState } from "react";
import Menu from "./Menu";
import Usuario from "./Vistas/usuario";
import "../style.css";
import AdminService from "services/AdminService";

import ListViewUsers from "components/listView/ListViewUsers";
import ListViewUsersTracker from "components/listView/ListViewUsersTracker";
import ClipLoader from "react-spinners/ClipLoader";
import listaIcon from "images/icons-lista.png";
import masIcon from "images/icons-mas.png";
import { useAlert } from "react-alert";

let formActual = Usuario;

const Main = () => {
  const [screen, setScreen] = useState("listUser");
  const [loading, setLoading] = useState(false);
  const [lista, setLista] = useState(false);
  const [activity, setActivity] = useState(false);
  const [datalist, setDatalist] = useState();
  const alert = useAlert();

  const saveToDb = async (route, body) => {
    setLoading(true);
    const res = await AdminService.adminPost(route, body);
    if (res.status === 200) {
      alert.success(res.data.msg);
    } else if (res.status === 202) {
      alert.show(res.data.msg);
    } else {
      alert.error(res.data.msg);
    }
    setLoading(false);
  };

  const loadListHandler = async (route) => {
    setLoading(true);
    const res = await AdminService.adminGetUsers(route);
    setDatalist(res.data);
    setLoading(false);
    setLista(true);
  };

  const screenHandler = (val) => {
    switch (val) {
      case "listUser":
        setActivity(false);
        formActual = Usuario;
        break;
      case "listUserActivity":
        setActivity(true);
        loadListHandler("activity");
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
        {!activity && (
          <div className="tabButtonsConstent">
            <span
              className="tabButtons"
              onClick={() => {
                loadListHandler("test/all");
              }}
            >
              <img src={listaIcon} alt="" height="auto" width="25%"></img>
            </span>
            <span onClick={() => setLista(false)} className="tabButtons">
              <img src={masIcon} alt="" height="auto" width="25%"></img>
            </span>
          </div>
        )}
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
            {lista && activity && (
              <ListViewUsersTracker
                rawData={datalist}
              />
            )}
            {lista && !activity && (
              <ListViewUsers
                reload={loadListHandler}
                rawData={datalist}
                route={"auth/delete"}
                formToEdit={formActual}
              />
            )}
            {!lista && !activity && (
              <div>
                {screen === "listUser" && <Usuario saveToDb={saveToDb} />}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Main;

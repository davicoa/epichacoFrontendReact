import React, { useState, useEffect } from "react";
import "./style.css";
import lapiz from "images/icons-lapiz.png";
import basura from "images/icons-basura.png";
import AdminService from "services/AdminService";
import { useAlert } from "react-alert";

const ListViewUsers = (props) => {
  const alert = useAlert();
  const [cards, setCards] = useState("");
  const [cardsHeader, setCardsHeader] = useState("");
  const [edit, setEdit] = useState(false);
  const [obj, setObj] = useState([]);

  useEffect(() => {
    setCards(
      props.rawData.map((element, i) => (
        <div className="listContainer" key={i}>
          <div
            className="dataList"
            style={{ backgroundColor: i % 2 !== 0 ? "#95a5a6" : "#ecf0f1" }}
          >
            {i === 0 &&
              setCardsHeader(
                <div className="listContainer" key={i}>
                  <div className="dataList">
                    <span>#</span>
                    <span>{Object.keys(element)[2]}</span>
                    <span>{Object.keys(element)[3]}</span>
                    <span>{Object.keys(element)[0]}</span>
                  </div>
                  <div className="tabButtonsConstent">
                    <span className="tabButtonsList">
                      <img src={lapiz} alt="" height="auto" width="25%"></img>
                    </span>
                    <span className="tabButtonsList">
                      <img src={basura} alt="" height="auto" width="25%"></img>
                    </span>
                  </div>
                </div>
              )}
            <span>{i + 1}</span>
            <span>{Object.values(element)[2]}</span>
            <span>{Object.values(element)[3]}</span>
            <span>{Object.values(element)[0][0].name}</span>
          </div>
          <div className="tabButtonsConstent">
            <span
              className="tabButtons"
              onClick={() => {
                setObj(element);
                setEdit(true);
              }}
            >
              <img src={lapiz} alt="" height="auto" width="25%"></img>
            </span>
            <span
              className="tabButtons"
              onClick={() => {
                onClickHandler(element._id, element.fecha);
              }}
            >
              <img src={basura} alt="" height="auto" width="25%"></img>
            </span>
          </div>
        </div>
      ))
    );
  }, []);

  const onClickHandler = async (id, fecha) => {
    if (window.confirm("Esta seguro que desea eliminar fecha: " + fecha)) {
      const res = await AdminService.adminDelete(props.route, id);
      if (res.status === 200) {
        props.reload("test/all");
        alert.success(res.data.msg);
      } else {
        alert.error(res.data.msg);
      }
    }
    setEdit(false);
  };

  const editeToDb = async (body) => {
    const res = await AdminService.adminPutUsers(obj._id, body);
    if (res.status === 200) {
      props.reload();
      alert.success(res.data.msg);
    } else {
      alert.error(res.data.msg);
    }
  };

  return (
    <div>
      {edit ? (
        <div>
          <span>editando</span>
          <props.formToEdit saveToDb={editeToDb} obj={obj} />
        </div>
      ) : (
        <div>
          {cardsHeader}
          {cards}
        </div>
      )}
    </div>
  );
};
export default ListViewUsers;

import React, { useState, useEffect } from "react";
import "./style.css";
import search from "images/icon-search.png";
import back from "images/icon-arrow-back.png";

const ListViewUsers = (props) => {

  const [cards, setCards] = useState("");
  const [cardsHeader, setCardsHeader] = useState("");

  const [showDetails, setShowDetails] = useState(false);
  const [Details, setDetails] = useState("");

  const mostrarElementHandler = element => {
    setDetails(element)
    setShowDetails(true)
  }

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
                    <span>Fecha</span>
                    <span>Usuario</span>
                    <span>Accion</span>
                    <span>Ruta</span>
                  </div>
                  <div className="tabButtonsConstent">
                    <span className="tabButtonsList">
                      <img src={search} alt="" height="auto" width="25%"></img>
                    </span>
                  </div>
                </div>
              )}
            <span>{i + 1}</span>
            <span>{element.createdAt.split("T")[0]}</span>
            <span>{element.createdBy.email}</span>
            <span>{element.action}</span>
            <span>{element.route}</span>
          </div>
          <div className="tabButtonsConstent">
            <span className="tabButtons" onClick={() => mostrarElementHandler(element)}>
              <img src={search} alt="" height="auto" width="25%"></img>
            </span>
          </div>
        </div>
      ))
    );
  }, []);

  return (
    <div>
      {showDetails &&
        <div className="detailsContainer">
          <div className="detailsHeader">
            <h2>{Details.createdAt.split("T")[0]}</h2>
            <span className="tabButtonsBack" onClick={() => setShowDetails(false)}>
              <img src={back} alt="" height="auto" width="15%"></img>
            </span>
          </div>
          <div className="detailsBody">
            <span><span>Fecha: &nbsp; </span>{Details.createdAt}</span>
            <span><span>Usuario: &nbsp; </span>{Details.createdBy.username}</span>
            <span><span>Email: &nbsp; </span>{Details.createdBy.email}</span>
            <span><span>Accion: &nbsp; </span>{Details.action}</span>
            <span><span>Ruta: &nbsp; </span>{Details.route}</span>
            <span><span>Rol: &nbsp; </span>{Details.createdBy.roles[0].name}</span>
            <span><span>IP: &nbsp; </span>{Details.ip}</span>
          </div>
        </div>
      }
      {!showDetails &&
        <>
          {cardsHeader}
          {cards}
        </>
      }
    </div>
  );
};
export default ListViewUsers;

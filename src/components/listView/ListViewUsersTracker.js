import React, { useState, useEffect } from "react";
import "./style.css";
import lapiz from "images/icons-lapiz.png";
import basura from "images/icons-basura.png";

const ListViewUsers = (props) => {
 
  const [cards, setCards] = useState("");
  const [cardsHeader, setCardsHeader] = useState("");

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
                    <span>{}</span>
                    <span>{}</span>
                    <span>{}</span>
                  </div>
                  <div className="tabButtonsConstent">
                    <span className="tabButtonsList">
                      <img src={lapiz} alt="" height="auto" width="25%"></img>
                    </span>
                  </div>
                </div>
              )}
            <span>{i + 1}</span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="tabButtonsConstent">
            <span className="tabButtons">
              <img src={basura} alt="" height="auto" width="25%"></img>
            </span>
          </div>
        </div>
      ))
    );
  }, []);

  return (
    <div>
      {cardsHeader}
      {cards}
    </div>
  );
};
export default ListViewUsers;

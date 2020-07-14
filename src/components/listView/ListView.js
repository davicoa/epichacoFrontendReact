import React, { useState, useEffect } from "react";
import "./style.css";
import lapiz from "images/icons-lapiz.png"
import basura from "images/icons-basura.png"

const ListView = (props) => {
  const [cards, setCards] = useState('')


  useEffect(() => {
    setCards(
      props.rawData.slice(-5).map((element, i) =>
        <div className="listContainer" key={i}>
          <div className="dataList" style={{ backgroundColor: i % 2 !== 0 ? "#95a5a6" : "#ecf0f1" }}>
            <span className="elementFecha">
              {i + 1}
            </span>
            <span className="elementFecha">
              {element.fecha}
            </span>
            <span className="elementFecha">
              {element.fecha}
            </span>
            <span className="elementFecha">
              {element.fecha}
            </span>
            <span className="elementFecha">
              {element.fecha}
            </span>
          </div>
          <div className="tabButtonsConstent">
            <span className="tabButtons">
              <img
                src={lapiz}
                alt=""
                height="auto"
                width="50%"
              ></img>
            </span>
            <span className="tabButtons">
              <img
                src={basura}
                alt=""
                height="auto"
                width="50%"
              ></img>
            </span>
          </div>
        </div>
      )
    )
  }, [])

  return <div>
    {cards}
  </div>;
};
export default ListView;

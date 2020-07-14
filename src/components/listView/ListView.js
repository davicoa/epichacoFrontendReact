import React, { useState, useEffect } from "react";
import "./style.css";

const ListView = (props) => {
  const [cards, setCards] = useState('')


  useEffect(() => {
    setCards(
      props.rawData.slice(-5).map((element, i) =>
        <div className="listContainer" key={i}>
          <div>
            <span className="elementFecha">
              {i}
            </span>
            <span className="elementFecha">
              {element.fecha}
            </span>
          </div>
          <div className="tabButtonsConstent">
            <span className="tabButtons">
              editar
              </span>
            <span className="tabButtons">
              borrar
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

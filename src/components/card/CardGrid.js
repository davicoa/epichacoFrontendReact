import React, { useState, useEffect } from "react";
import "./style.css";
import DataCard from "components/dataCard/DataCard";
import Card from "components/dataCard/card";
import LINK from "constant/Links";

const CardGrid = () => {
  const [cards, setCards] = useState();

  const reloadCard = () => {
    setCards(
      LINK.map((element, i) =>
        element instanceof Object ? (
          <div key={i} className="grid_item">
            <Card dataGraph={element} />
          </div>
        ) : (
          <div key={i} className="grid_item">
            <DataCard links={element} posicion={i} />
          </div>
        )
      )
    );
  };

  // refrescar cada 15 min
  useEffect(() => {
    reloadCard();
    const interval = setInterval(() => {
      reloadCard();
    }, 900000);
    return () => clearInterval(interval);
  }, []);

  return <div className="grid_items">{cards}</div>;
};
export default CardGrid;

import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "components/dataCard/card";
import LINK from "constant/Links";

const CardGrid = () => {
  const [cards, setCards] = useState();

  const reloadCard = () => {
    setCards(
      LINK.map((element, i) =>
          <div key={i} className="grid_item">
            <Card dataGraph={element} />
          </div>
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

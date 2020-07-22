import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "components/dataCard/card";
import LINK from "constant/Links";

import SimpleSlider from "components/customSlider/SimpleSlider"
let arraySlider = []
const CardGrid = () => {
  const [cards, setCards] = useState();
  const [load, setLoad] = useState(false);
  const [slider, setSlider] = useState([]);

  const cargarSliderHandler = (valor, cantidad) => {
    arraySlider.push(valor)
    setSlider(arraySlider)
    console.log(arraySlider)
    if(arraySlider.length > cantidad){
      setLoad(true)
    }
  }
  

  const reloadCard = () => {
    setCards(
      LINK.map((element, i) =>
        <div key={i} className="grid_item">
          <Card dataGraph={element} cargarSliderHandler={cargarSliderHandler}/>
        </div>
      )
    )
  }

  // refrescar cada 15 min
  useEffect(() => {
    reloadCard()
    const interval = setInterval(() => {
      reloadCard()
    }, 900000)
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      {load?<SimpleSlider slider={arraySlider} slider2={slider} />: ""}
      <div className="grid_items">{cards}</div>
    </>
    );
};
export default CardGrid;

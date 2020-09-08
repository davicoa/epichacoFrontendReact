import React, { useState, useEffect } from 'react'
import "./style.css"
import DataCard from 'components/dataCard/DataCard'
import LINK from 'constant/Links'

const CardContainer = () => {

    const [cards, setCards] = useState()

    const reloadCard = () => {
        setCards(LINK.map((element, i) =>
            <DataCard links={element} key={i} posicion={i} /> //i id dinamico
        ))
    }

    // refrescar cada 15 min
    useEffect(() => {
        reloadCard()
        const interval = setInterval(() => {
            reloadCard()
        }, 900000);
        return ( ()=>{
            clearInterval(interval)
         });
    }, []);

    
    return (
        <div className="containerCards">
            {cards}
        </div>
    )
}
export default CardContainer

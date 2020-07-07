import React from "react"
import "../style.css"

const Menu = props => {
    return (
        <nav className="menuContainer">
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('')}
                >
                    Forestal Primario
                </span>
            </ul>
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('StockBovinoPorcino')}
                >
                    Stock BovinoPorcino
                </span>
            </ul>
            
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('PreciosAgrosDiarios')}
                >
                    Precios Agros Diarios
                </span>
            </ul>
            
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('PreciosAgrosMensuales')}
                >
                    Precios Agros Mensuales
                </span>
            </ul>
            
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('PreciosGanaderos')}
                >
                    Precios Ganaderos
                        </span>
            </ul>
            
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('Faena')}
                >
                    Faena
                    </span>
            </ul>
        </nav>
    )
}

export default Menu
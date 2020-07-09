import React from "react"
import "../style.css"

const Menu = props => {
    return (
        <nav className="menuContainer">
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('')}
                >
                    Indicadores Laborales
                </span>
            </ul>
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('EmpleoGeneral')}
                >
                    Empleo General
                </span>
            </ul>
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('EmpleoIERIC')}
                >
                    Empleo IERIC
                </span>
            </ul>
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('PobrezaIndigencia')}
                >
                   Pobreza/Indigencia
                </span>
            </ul>
        </nav>
    )
}

export default Menu
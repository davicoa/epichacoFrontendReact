import React from "react"
import "../style.css"

const Menu = props => {
    return (
        <nav className="menuContainer">
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('')}
                >
                    IPC-GR RESIS
                </span>
            </ul>
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('Cemento')}
                >
                    Cemento
                </span>
            </ul>
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('Combustible')}
                >
                    Combustible
                </span>
            </ul>
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('Supermercado')}
                >
                   Supermercado
                </span>
            </ul>
            
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('Vehiculo')}
                >
                    Vehículo
                </span>
            </ul>
        </nav>
    )
}

export default Menu
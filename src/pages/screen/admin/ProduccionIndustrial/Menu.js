import React from "react"
import "../style.css"

const Menu = props => {
    return (
        <nav className="menuContainer">
            <ul>
                <span className="menuProduccionprimaria"
                    onClick={() => props.screen('')}
                >
                    Foresto Industria
                </span>
            </ul>
        </nav>
    )
}

export default Menu
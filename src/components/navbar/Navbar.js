import React from "react"
import "./style.css"

const Navbar = () => {
    return (
        <nav className="navbarContainer">
            <ul className="activeNavTab">
                <span>Monitor</span>
            </ul>
            <span>|</span>
            <ul>
                Producción
            </ul>
            <span>|</span>
            <ul>
                Industria
            </ul>
            <span>|</span>
            <ul>
                Empleo
            </ul>
            <span>|</span>
            <ul>
                Comercio
            </ul>
            <span>|</span>
            <ul>
                Construcción
            </ul>
            <span>|</span>
            <ul>
                Mas...
            </ul>
        </nav>
    )
}

export default Navbar
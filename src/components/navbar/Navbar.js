import React from "react"
import "./style.css"

const Navbar = () => {
    return (
        <nav className="navbarContainer">
            <ul>
                <span style={{ backgroundColor: "rgba(92, 187, 209, 1)", color: "white", width: "140px", display: "inline-block" }}>Monitor</span>
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
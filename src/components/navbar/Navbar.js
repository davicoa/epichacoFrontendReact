import React, { useState } from "react"
import "./style.css"

const Navbar = (props) => {
    const [active, setAtive] = useState(0);
    return (
        <nav className="navbarContainer">
            <ul className={active === 0 ? "activeNavTab" : ""}
                onClick={() => {
                    setAtive(0);
                    props.screen("");
                }}
            >
                <span>Monitor</span>
            </ul>
            <span>|</span>
            <ul className={active === 1 ? "activeNavTab" : ""}
                onClick={() => {
                    setAtive(1);
                    props.screen("produccion");
                }}
            >
                <div className="dropdown">
                    Producción
                <div className="dropdown-content">
                        <span onClick={() => props.navEmbedHandler("Producción Ganadera")} >Producción Ganadera</span>
                        <span onClick={() => props.navEmbedHandler("Producción Agrícola")}>Producción Agrícola</span>
                    </div>
                </div>
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
import React from "react"
import "./style.css"

const Navbar = (props) => {

    return (
        <nav className="navbarContainer">
            <ul className="activeNavTab">
                <span onClick={()=> props.navHandler("")}>Monitor</span>
            </ul>
            <span>|</span>
            <ul>
                <div class="dropdown">
                    Producción
                <div class="dropdown-content">
                        <span onClick={()=> props.navHandler(1)} >Producción Ganadera</span>
                        <span onClick={()=> props.navHandler(2)}>Producción Agrícola</span>
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
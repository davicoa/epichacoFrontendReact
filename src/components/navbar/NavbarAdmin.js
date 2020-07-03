import React from "react"
import "./style.css"

const NavbarAdmin = props => {
    return (
        <nav className="navbarContainer">
            <ul>
                <span
                    onClick={() => props.screen('produccionprimaria')}
                >
                    Produccion Primaria
                </span>
            </ul>
            <span>|</span>
            <ul>
                <span
                    onClick={() => props.screen('produccionindustrial')}
                >
                    Produccion Industrial
                </span>
            </ul>
            <span>|</span>
            <ul>
                <span
                    onClick={() => props.screen('imach')}
                >
                    Imach
                </span>
            </ul>
            <span>|</span>
            <ul>
                <span
                    onClick={() => props.screen('empleo')}
                >
                    Empleo
                        </span>
            </ul>
            <span>|</span>
            <ul>
                <span
                    onClick={() => props.screen('consumo/servicios')}
                >
                    Consumo/Servicios
                    </span>
            </ul>
        </nav>
    )
}

export default NavbarAdmin
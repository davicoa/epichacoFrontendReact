import React from "react"
import "./style.css"
import logoMinisterio from "images/logo1.svg"
import logoChaco from "images/logo2.svg"
import logoSubsecretaria from "images/subse_empleo.svg"

const Footer = () => {
    return (
        <footer className="footerWrapper">
            <div className="stickyFooter centerFooter">
                <img
                className="logoSubsecretaria"
                alt="logo Subsecretaria"
                src={logoSubsecretaria}
                />
                <img
                className="logoMinisterio"
                alt="logo Ministerio"
                src={logoMinisterio}
                />
                <span className="textFooter">
                </span>
                <img
                className="logoChaco"
                alt="logoChaco"
                src={logoChaco}
                />
            </div>
        </footer>
    )
}
export default Footer
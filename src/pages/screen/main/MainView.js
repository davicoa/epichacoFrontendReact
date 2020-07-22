import React, { useState } from "react"
import NavBar from "components/navbar/Navbar"
import CardGrid from "components/card/CardGrid"
import Embeds from "components/embeds/Embeds"

const MainView = () => {

    const [screen, setScreen] = useState("");
    const [embeds, setEmbeds] = useState("");

    const navHandler = (screen) => {
        setEmbeds(screen)
    }

    return (
        <div>
            <NavBar navHandler={navHandler} />
            {screen === "" && (
                <CardGrid />
            )}
            {screen === "1" && <Embeds />}
        </div>
    )
}
export default MainView
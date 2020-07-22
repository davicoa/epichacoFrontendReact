import React, { useState } from "react"
import NavBar from "components/navbar/Navbar"
import CardGrid from "components/card/CardGrid"
import Embeds from "components/embeds/Embeds"

const MainView = () => {

    const [screen, setScreen] = useState("");
    const [embeds, setEmbeds] = useState("");

    const navEmbedHandler = (embeds) => {
        setEmbeds(embeds)
    }
    const navHandler = (screen) => {
        setScreen(screen)
    }

    return (
        <div>
            <NavBar navEmbedHandler={navEmbedHandler} screen={navHandler} />
            {screen === "" && (
                <CardGrid />
            )}
            {screen === "produccion" && <Embeds link={embeds}/>}
        </div>
    )
}
export default MainView
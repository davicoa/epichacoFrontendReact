import React from "react"
import NavBar from "components/navbar/Navbar"
import CardContainer from "components/cardContainer/CardContainer"
import CardGrid from "components/card/CardGrid"

const MainView = () =>{
    return(
        <div>
            <NavBar />
            <CardGrid />
        </div>
    )
}
export default MainView
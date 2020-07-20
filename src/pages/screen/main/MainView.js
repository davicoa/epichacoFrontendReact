import React from "react"
import NavBar from "components/navbar/Navbar"
import CardGrid from "components/card/CardGrid"
import CarCustomSliderdGrid from "components/customSlider/CustomSlider"

const MainView = () =>{
    return(
        <div>
            <NavBar />
            <CarCustomSliderdGrid />
            <CardGrid />
        </div>
    )
}
export default MainView
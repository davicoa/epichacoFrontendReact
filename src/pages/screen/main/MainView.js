import React from "react"
import NavBar from "components/navbar/Navbar"
import CardGrid from "components/card/CardGrid"
import SimpleSlider from "components/customSlider/SimpleSlider"

const MainView = () =>{
    return(
        <div>
            <NavBar />
            <SimpleSlider />
            <CardGrid />
        </div>
    )
}
export default MainView
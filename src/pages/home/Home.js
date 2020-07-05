import React from "react"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import CardContainer from '../../components/CardContainer/CardContainer'
import Login from '../../components/Login/Login';
import Admin from 'pages/Form/Admin'
import '../../App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

const Home = () => {

  return (
    <div className="App" >
      <Header />
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              
              <Navbar />
              <CardContainer /> 
             
              {/* <Login /> */}
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  )

}
export default Home
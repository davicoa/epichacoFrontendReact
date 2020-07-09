import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import MainView from "pages/screen/main/MainView";
import Login from "pages/screen/login/Login";
import Admin from "pages/screen/admin/Admin";
import "../../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import isLoginIn from "services/VerifyToken";

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Switch>
            {isLoginIn() ?
              user.roles.some(role => role === "ROLE_ADMIN" || role === "ROLE_MODERATOR")?
              <div>
                <Route exact path="/">
                  <MainView />
                </Route>
                <Route path="/admin">
                  <Admin />
                </Route>
              </div>
              :
              <Route exact path="/">
                <MainView />
              </Route>
             :
              <Admin />
            }
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
};
export default Home;

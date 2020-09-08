import React from "react";
import "./style.css";
import { useHistory, useLocation } from "react-router-dom";
import AuthService from "services/AuthService" 
const user = JSON.parse(localStorage.getItem("user"));

const Header = () => {
  const history = useHistory();
  let location = useLocation();

  const routeChange = path => {
    history.push(path);
    window.location.reload();
  };

  return (
    <header>
      <div className="headerContainer fullCenter">
        <div className="logoHeaderContainer">
          <div className="logoHeader"></div>
        </div>
      </div>
      {user && (
        <div className="logoutAdministrar">
          {user.roles.some(
            (role) => role === "ROLE_ADMIN" || role === "ROLE_MODERATOR"
          ) && (
            (location.pathname ==='/admin')?
            <span
              className="logoutAdministrar2"
              onClick={() => routeChange("/")}
            >
              Back
            </span>
           
            :
            <span
            className="logoutAdministrar2"
            onClick={() => routeChange("admin")}
          >
            Administrar
          </span>
          )}
          <span
           className="logoutAdministrar2"
           onClick={() => {
            AuthService.logout()
            window.location.reload();
           }}
           >
             Logout</span>
        </div>
      )}
    </header>
  );
};
export default Header;

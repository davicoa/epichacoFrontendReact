import React from "react";
import "./style.css";
const user = JSON.parse(localStorage.getItem("user"));

const Header = () => {
  return (
    <header>
      <div className="headerContainer fullCenter">
        <div className="logoHeaderContainer">
          <div className="logoHeader"></div>
        </div>
      </div>
      {user && (
        <div>
          <span>logout</span>
          {user.roles.some(role => role === "ROLE_ADMIN" || role === "ROLE_MODERATOR") && (
            <span>Administtrar </span>
          )}
        </div>
      )}
    </header>
  );
};
export default Header;

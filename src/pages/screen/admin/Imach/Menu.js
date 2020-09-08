import React, { useState } from "react";
import "../style.css";

const Menu = (props) => {
  const [active, setAtive] = useState(1);
  return (
    <nav className="menuContainer">
      <ul>
        <span
          className={
            active === 1
              ? "menuProduccionprimaria activeNavTabPanel"
              : "menuProduccionprimaria"
          }
          onClick={() => {
            setAtive(1);
            props.screen("imach");
          }}
        >
          IMACH
        </span>
      </ul>
    </nav>
  );
};

export default Menu;

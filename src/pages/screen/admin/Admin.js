import React, { useState } from "react";
import MainProduccionPrimaria from "./ProduccionPrimaria/Main";
import MainProduccionIndustrial from "./ProduccionIndustrial/Main";
import MainImach from "./Imach/Main";
import MainEmpleo from "./Empleo/Main";
import MainConsumoServicios from "./ConsumoServicios/Main";
import NavbarAdmin from "components/navbar/NavbarAdmin";

const Admin = () => {
  const [screen, setScreen] = useState("");

  const screenHandler = (val) => {
    setScreen(val);
  };
  return (
    <div className="screenPrimary">
      <NavbarAdmin screen={screenHandler} />
      {screen === "produccionprimaria" && <MainProduccionPrimaria />}
      {screen === "produccionindustrial" && (
        <div className="defaultScreen">
          <span>BETA en construcción: Area para Carga de datos produccion industrial</span>
        </div>
      )}
      {screen === "imach" && (
        <div className="defaultScreen">
          <span>BETA en construcción: Area para Carga de datos imach</span>
        </div>
      )}
      {screen === "empleo" && (
        <div className="defaultScreen">
          <span>BETA en construcción: Area para Carga de datos empleo</span>
        </div>
      )}
      {screen === "consumoServicios" && <MainConsumoServicios />}
      {screen === "" && (
        <div className="defaultScreen">
          <span>BETA en construcción: Area para Carga de datos</span>
        </div>
      )}
    </div>
  );
};
export default Admin;

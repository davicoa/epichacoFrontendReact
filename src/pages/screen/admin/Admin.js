import React, { useState } from "react";
import MainProduccionPrimaria from "./ProduccionPrimaria/Main";
import MainProduccionIndustrial from "./ProduccionIndustrial/Main";
import MainImach from "./Imach/Main";
import MainEmpleo from "./Empleo/Main";
import MainConsumoServicios from "./ConsumoServicios/Main";
import NavbarAdmin from "components/navbar/NavbarAdmin";
import AdministrarUsuarios from "pages/screen/admin/AdmintrarUsuarios/Main";

const Admin = () => {
  const [screen, setScreen] = useState("");

  const screenHandler = (val) => {
    setScreen(val);
  };
  return (
    <div className="screenPrimary">
      <NavbarAdmin screen={screenHandler} />
      {screen === "produccionprimaria" && <MainProduccionPrimaria />}
      {screen === "produccionindustrial" && <MainProduccionIndustrial />}
      {screen === "imach" && <MainImach />}
      {screen === "empleo" && <MainEmpleo />}
      {screen === "consumoServicios" && <MainConsumoServicios />}
      {screen === "administrarUsuarios" && <AdministrarUsuarios />}
      {screen === "" && (
        <div className="defaultScreen">
          <span>En construcción: Area para Carga de datos</span>
        </div>
      )}
    </div>
  );
};
export default Admin;

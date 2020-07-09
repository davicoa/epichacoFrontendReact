import React, { useState } from "react";
import Menu from "./Menu";
import IndicadoresLaborales from "../Empleo/Vistas/IndicadoresLaborales"
import EmpleoGeneral from "../Empleo/Vistas/EmpleoGeneral"
import Empleoieric from "../Empleo/Vistas/Empleoieric"
import PobrezaIndigencia from "../Empleo/Vistas/PobrezaIndigencia"

import "react-datepicker/dist/react-datepicker.css";
import "../style.css";
import AdminService from "services/AdminService";

const Main = () => {
    const [screen, setScreen] = useState("");
    const [loading, setLoading] = useState(false);
    const [msg, setMsd] = useState("");

    const saveToDb = async (route, body) => {
        setLoading(true);
        const res = await AdminService.adminPost(route, body);
        setMsd(res);
        setLoading(false);
    };

    const screenHandler = (val) => {
        setScreen(val);
    };
    return (
        <div className="mainContainer">
            <div className="mainMenu">
                <div>
                    <Menu screen={screenHandler} />
                </div>
            </div>
            <div className="mainForm">
                <div>
                    {screen === '' && <IndicadoresLaborales
                        saveToDb={saveToDb}
                        loading={loading}
                        msg={msg}
                    />}
                    {screen === 'EmpleoGeneral' && <EmpleoGeneral
                        saveToDb={saveToDb}
                        loading={loading}
                        msg={msg}
                    />}
                    {screen === 'EmpleoIERIC' && <Empleoieric
                        saveToDb={saveToDb}
                        loading={loading}
                        msg={msg}
                    />}
                    {screen === 'PobrezaIndigencia' && <PobrezaIndigencia
                        saveToDb={saveToDb}
                        loading={loading}
                        msg={msg}
                    />}
                </div>
            </div>
        </div>
    );
};
export default Main;

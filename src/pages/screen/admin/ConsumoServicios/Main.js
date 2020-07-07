import React, { useState } from "react";
import Menu from "./Menu";
import Cemento from "../ConsumoServicios/Vistas/Cemento"
import Combustible from "../ConsumoServicios/Vistas/Combustible"
import IPCGResis from "../ConsumoServicios/Vistas/IPCGRResis"
import Supermercado from "../ConsumoServicios/Vistas/Supermercado"
import Vehiculo from "../ConsumoServicios/Vistas/Vehiculo"
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
                    {screen === '' && <IPCGResis
                        saveToDb={saveToDb}
                        loading={loading}
                        msg={msg}
                    />}
                    {screen === 'Cemento' && <Cemento
                        saveToDb={saveToDb}
                        loading={loading}
                        msg={msg}
                    />}
                    {screen === 'Combustible' && <Combustible
                        saveToDb={saveToDb}
                        loading={loading}
                        msg={msg}
                    />}
                    {screen === 'Supermercado' && <Supermercado
                        saveToDb={saveToDb}
                        loading={loading}
                        msg={msg}
                    />}
                    {screen === 'Vehiculo' && <Vehiculo
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

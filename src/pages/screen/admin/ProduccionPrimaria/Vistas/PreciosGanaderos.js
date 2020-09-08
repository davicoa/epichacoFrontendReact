import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../../style.css"

const PreciosGanaderos = (props) => {
    const obj = props.obj;
    let aux = typeof obj !== "undefined"? obj.fecha.split("/"):"undefined"
    const [date, setFecha] = useState(aux !== "undefined" ? new Date(aux[1]+'/'+aux[0]+'/'+aux[2]) : new Date());
    const [zona, setZona] = useState(typeof obj !== "undefined" ? obj.zona : "")
    const [vaca_abasto, setVaca_abasto] = useState(typeof obj !== "undefined" ? obj.vaca_abasto : "")
    const [vaca_invernada, setVaca_invernada] = useState(typeof obj !== "undefined" ? obj.vaca_invernada : "")
    const [novillo, setNovillo] = useState(typeof obj !== "undefined" ? obj.novillo : "")
    const [vaquilla, setVaquilla] = useState(typeof obj !== "undefined" ? obj.vaquilla : "")
    const [toro, setToro] = useState(typeof obj !== "undefined" ? obj.toro : "")
    const [vaquilla_prenadas, setVaquilla_prenadas] = useState(typeof obj !== "undefined" ? obj.vaquilla_prenadas : "")
    const [novillitos, setNovillitos] = useState(typeof obj !== "undefined" ? obj.novillitos : "")
    const [ternero, setTernero] = useState(typeof obj !== "undefined" ? obj.ternero : "")
    const [ternera, setTernera] = useState(typeof obj !== "undefined" ? obj.ternera : "")
    const [terneros_terneras, setTerneros_terneras] = useState(typeof obj !== "undefined" ? obj.terneros_terneras : "")

    const setFechaHandler = Date => {
        setFecha(Date);
    }

    const setImputHandler = (e) => {
        switch (e.target.name) {
            case "zona":
                setZona(e.target.value);
                break;
            case "vaca_abasto":
                setVaca_abasto(e.target.value);
                break;
            case "vaca_invernada":
                setVaca_invernada(e.target.value);
                break;
            case "novillo":
                setNovillo(e.target.value);
                break;
            case "vaquilla":
                setVaquilla(e.target.value);
                break;
            case "toro":
                setToro(e.target.value);
                break;
            case "vaquilla_prenadas":
                setVaquilla_prenadas(e.target.value);
                break;
            case "novillitos":
                setNovillitos(e.target.value);
                break;
            case "ternero":
                setTernero(e.target.value);
                break;
            case "ternera":
                setTernera(e.target.value);
                break;
            case "terneros_terneras":
                setTerneros_terneras(e.target.value);
                break;
            default:
                break;
        }
    };

    const savetobd = (e) => {
        e.preventDefault();
        let fecha = date.getUTCDate().toString().padStart(2, "0")+"/"+(date.getUTCMonth()+1).toString().padStart(2, "0")+"/"+date.getUTCFullYear()
        props.saveToDb("preciosGanaderos", {
            fecha,
            zona,
            vaca_abasto,
            vaca_invernada,
            novillo,
            vaquilla,
            toro,
            vaquilla_prenadas,
            novillitos,
            ternero,
            ternera,
            terneros_terneras,
        });
    }

    return (
        <div className="formContainer">
            <span className="tituloDatoACargar">Precios Ganaderos</span>
            <form onSubmit={savetobd}>
                <div className="divExterno">
                    <div className="divInterno">
                        <div className="divContaniner">
                            <p className="textinput">Fecha:</p>
                            <DatePicker
                                className="divContaniner"
                                dateFormat="dd/MM/yyyy"
                                selected={date}
                                name="fecha"
                                onChange={Date => setFechaHandler(Date)}
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Vaca abasto</p>
                            <input
                                placeholder="Vaca abasto"
                                type="text"
                                value={vaca_abasto}
                                name="vaca_abasto"
                                onChange={setImputHandler}
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Vaca ivernada</p>
                            <input
                                placeholder="Vaca ivernada"
                                type="text"
                                value={vaca_invernada}
                                name="vaca_invernada"
                                onChange={setImputHandler}
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Vaquilla preñana</p>
                            <input
                                placeholder="Vaquilla preñana"
                                type="text"
                                value={vaquilla_prenadas}
                                name="vaquilla_prenadas"
                                onChange={setImputHandler}
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Novillo</p>
                            <input
                                placeholder="Novillo"
                                type="text"
                                value={novillo}
                                name="novillo"
                                onChange={setImputHandler}
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Novillitos</p>
                            <input
                                placeholder="Novillitos"
                                type="text"
                                value={novillitos}
                                name="novillitos"
                                onChange={setImputHandler}
                            />
                        </div>
                    </div>
                    <div className="divInterno">
                        <div className="divContaniner">
                            <p className="textinput">Zona</p>
                            <select
                                value={zona}
                                name="zona"
                                onChange={setImputHandler}
                                required
                            >
                                <option value="" disabled>Seleccione una opcion</option>
                                <option value="Agricola/Ganadera">Agricola/Ganadera</option>
                                <option value="Zona Norte" >Zona Norte</option>
                                <option value="Domo Ganadero" >Domo Ganadero</option>
                            </select>
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Vaquilla</p>
                            <input
                                placeholder="Vaquilla"
                                type="text"
                                value={vaquilla}
                                name="vaquilla"
                                onChange={setImputHandler}
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Toro</p>
                            <input
                                placeholder="Toro"
                                type="text"
                                value={toro}
                                name="toro"
                                onChange={setImputHandler}
                            />
                        </div>

                        <div className="divContaniner">
                            <p className="textinput">Ternero</p>
                            <input
                                placeholder="Ternero"
                                type="text"
                                value={ternero}
                                name="ternero"
                                onChange={setImputHandler}
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Ternera</p>
                            <input
                                placeholder="Ternera"
                                type="text"
                                value={ternera}
                                name="ternera"
                                onChange={setImputHandler}
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Ternero/as</p>
                            <input
                                placeholder="Ternero/as"
                                type="text"
                                value={terneros_terneras}
                                name="terneros_terneras"
                                onChange={setImputHandler}
                            />
                        </div>
                    </div>
                </div>
                <div className="divContaninerCenter">
                    <button
                        className="botton"
                        type="submit"
                    >
                        Guardar
                </button>
                </div>
            </form>
        </div>
    );
}
export default PreciosGanaderos
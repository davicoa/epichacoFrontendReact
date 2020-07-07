import React, { useState } from "react";
import DatePicker from "react-datepicker"
import ClipLoader from "react-spinners/ClipLoader"
import "react-datepicker/dist/react-datepicker.css"
import "../../style.css"

const PreciosGanaderos = (props) => {
    const [fecha, setFecha] = useState(new Date())
    const [zona, setZona] = useState("")
    const [vaca_abasto, setVaca_abasto] = useState("")
    const [vaca_invernada, setVaca_invernada] = useState("")
    const [novillo, setNovillo] = useState("")
    const [vaquilla, setVaquilla] = useState("")
    const [toro, setToro] = useState("")
    const [vaquilla_prenadas, setVaquilla_prenadas] = useState("")
    const [novillitos, setNovillitos] = useState("")
    const [ternero, setTernero] = useState("")
    const [ternera, setTernera] = useState("")
    const [terneros_terneras, setTerneros_terneras] = useState("")

    const setImputHandler = (e) => {
        switch (e.target.name) {
            case "fecha":
                setFecha(e.target.value);
                break;
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
            {props.loading ? (
                <ClipLoader
                    css={("display: block", "margin: 0 auto", "border-color: blue")}
                    size={150}
                    color={"#123abc"}
                    loading={props.loading}
                />
            ) : (
                    <form onSubmit={savetobd}>
                        <div className="divExterno">
                            <div className="divInterno">
                                <div className="divContaniner">
                                    <p className="textinput">Fecha:</p>
                                    <DatePicker
                                        className="divContaniner"
                                        selected={fecha}
                                        name="fecha"
                                        onChange={setImputHandler}
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
                                    <input
                                        placeholder="Zona"
                                        type="text"
                                        value={zona}
                                        name="zona"
                                        onChange={setImputHandler}
                                    />
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
                )}
            <div className="divMsgBottom">
                <span
                    style={{ color: props.msg === "Fallo en la carga" ? "red" : "green" }}
                >
                    {props.msg}
                </span>
            </div>
        </div>
    );
}
export default PreciosGanaderos
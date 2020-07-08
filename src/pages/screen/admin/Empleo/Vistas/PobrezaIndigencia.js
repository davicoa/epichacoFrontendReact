import React, { useState } from "react"
import DatePicker from "react-datepicker"
import ClipLoader from "react-spinners/ClipLoader"
import "react-datepicker/dist/react-datepicker.css"

const Cemento = props => {

    const [fecha, setFecha] = useState(new Date())
    const [semestre, setSemestre] = useState("")
    const [tasa, setTasa] = useState("")
    const [alcance, setAlcance] = useState("")
    const [gran_resistencia, setGran_resistencia] = useState("")
    const [var_pp_semestral_gran_resistencia, setVar_pp_semestral_gran_resistencia] = useState("")
    const [var_pp_ia_gran_resistencia, setVar_pp_ia_gran_resistencia] = useState("")

    const setImputHandler = (e) => {
        switch (e.target.name) {
            case "fecha":
                setFecha(e.target.value);
                break;
            case "semestre":
                setSemestre(e.target.value);
                break;
            case "tasa":
                setAlcance(e.target.value);
                break;
            case "alcance":
                setTasa(e.target.value);
                break;
            case "gran_resistencia":
                setGran_resistencia(e.target.value);
                break;
            case "var_pp_semestral_gran_resistencia":
                setVar_pp_semestral_gran_resistencia(e.target.value);
                break;
            case "var_pp_ia_gran_resistencia":
                setVar_pp_ia_gran_resistencia(e.target.value);
                break;
            default:
                break;
        }
    };

    const savetobd = (e) => {
        e.preventDefault();
        props.saveToDb("pobrezaIndigencia", {
            fecha,
            semestre,
            tasa,
            alcance,
            gran_resistencia,
            var_pp_semestral_gran_resistencia,
            var_pp_ia_gran_resistencia,
        });
    }

    return (
        <div className="formContainer">
            <span className="tituloDatoACargar">Pobreza Indigencia</span>
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
                                    <p className="textinput">semestre</p>
                                    <input
                                        placeholder="semestre"
                                        type="text"
                                        value={semestre}
                                        name="semestre"
                                        onChange={setImputHandler}
                                    />
                                </div>
                                <div className="divContaniner">
                                    <p className="textinput">alcance</p>
                                    <input
                                        placeholder="alcance"
                                        type="text"
                                        value={alcance}
                                        name="alcance"
                                        onChange={setImputHandler}
                                    />
                                </div>
                                <div className="divContaniner">
                                    <p className="textinput">tasa</p>
                                    <input
                                        placeholder="tasa"
                                        type="text"
                                        value={tasa}
                                        name="tasa"
                                        onChange={setImputHandler}
                                    />
                                </div>
                                <div className="divContaniner">
                                    <p className="textinput">gran_resistencia</p>
                                    <input
                                        placeholder="gran_resistencia"
                                        type="text"
                                        value={gran_resistencia}
                                        name="gran_resistencia"
                                        onChange={setImputHandler}
                                    />
                                </div>

                                <div className="divContaniner">
                                    <p className="textinput">var_pp_semestral_gran_resistencia</p>
                                    <input
                                        placeholder="var_pp_semestral_gran_resistencia"
                                        type="text"
                                        value={var_pp_semestral_gran_resistencia}
                                        name="var_pp_semestral_gran_resistencia"
                                        onChange={setImputHandler}
                                    />
                                </div>
                                <div className="divContaniner">
                                    <p className="textinput">var_pp_ia_gran_resistencia</p>
                                    <input
                                        placeholder="var_pp_ia_gran_resistencia"
                                        type="text"
                                        value={var_pp_ia_gran_resistencia}
                                        name="var_pp_ia_gran_resistencia"
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
    )
}
export default Cemento
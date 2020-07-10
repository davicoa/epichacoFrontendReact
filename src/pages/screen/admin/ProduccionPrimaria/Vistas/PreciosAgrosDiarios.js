import React, { useState } from "react";
import DatePicker from "react-datepicker"
import ClipLoader from "react-spinners/ClipLoader";
import "react-datepicker/dist/react-datepicker.css"
import "../../style.css"

const PreciosAgrosDiarios = (props) => {

    const [fecha, setFecha] = useState(new Date())
    const [grano, setGrano] = useState("")
    const [valor_actual, setValor_actual] = useState("")
    const [variacion_diaria, setVariacion_diaria] = useState("")
    const [var_diaria_porcen, setVar_diaria_porcen] = useState("")
    const [var_mensual_porcen, setVar_mensual_porcen] = useState("")
    const [var_ia_porcen, setVar_ia_porcen] = useState("")

    const setFechaHandler = Date => {
        setFecha(Date);
    }

    const setImputHandler = (e) => {
        switch (e.target.name) {
            case "grano":
                setGrano(e.target.value);
                break;
            case "valor_actual":
                setValor_actual(e.target.value);
                break;
            case "variacion_diaria":
                setVariacion_diaria(e.target.value);
                break;
            case "var_diaria_porcen":
                setVar_diaria_porcen(e.target.value);
                break;
            case "var_mensual_porcen":
                setVar_mensual_porcen(e.target.value);
                break;
            case "var_ia_porcen":
                setVar_ia_porcen(e.target.value);
                break;
            default:
                break;
        }
    };

    const savetobd = (e) => {
        e.preventDefault();
        props.saveToDb("preciosAgroDiarios", {
            fecha,
            grano,
            valor_actual,
            variacion_diaria,
            var_diaria_porcen,
            var_mensual_porcen,
            var_ia_porcen,
        });
    };

    return (
        <div className="formContainer">
            <span className="tituloDatoACargar">Precios Agros Diarios</span>
            {props.loading ? (
                <ClipLoader
                    css={("display: block", "margin: 0 auto", "border-color: blue")}
                    size={150}
                    color={"#123abc"}
                    loading={props.loading}
                />
            ) : (
                    <form onSubmit={savetobd}>
                        <div className="divContaninerCenter">
                            <p className="textinput">Fecha:</p>
                            <DatePicker
                                className="divContaniner"
                                dateFormat="dd/MM/yyyy"
                                selected={fecha}
                                name="fecha"
                                onChange={Date => setFechaHandler(Date)}
                            />
                        </div>
                        <div className="divExterno">
                            <div className="divInterno">
                                <div className="divContaniner">
                                    <p className="textinput">Grano</p>
                                    <input
                                        placeholder="Grano"
                                        type="text"
                                        value={grano}
                                        name="grano"
                                        onChange={setImputHandler}
                                    />
                                </div>
                                <div className="divContaniner">
                                    <p className="textinput">Valor Actual</p>
                                    <input
                                        placeholder="Valor Actual"
                                        type="text"
                                        value={valor_actual}
                                        name="valor_actual"
                                        onChange={setImputHandler}
                                    />
                                </div>
                                <div className="divContaniner">
                                    <p className="textinput">Variacion Diaria</p>
                                    <input
                                        placeholder="Variacion Diaria"
                                        type="text"
                                        value={variacion_diaria}
                                        name="variacion_diaria"
                                        onChange={setImputHandler}
                                    />
                                </div>
                            </div>
                            <div className="divInterno">
                                <div className="divContaniner">
                                    <p className="textinput">Var % diaria</p>
                                    <input
                                        placeholder="Var % diaria"
                                        type="text"
                                        value={var_diaria_porcen}
                                        name="var_diaria_porcen"
                                        onChange={setImputHandler}
                                    />
                                </div>
                                <div className="divContaniner">
                                    <p className="textinput">Var % mensual</p>
                                    <input
                                        placeholder="Var % mensual"
                                        type="text"
                                        value={var_mensual_porcen}
                                        name="var_mensual_porcen"
                                        onChange={setImputHandler}
                                    />
                                </div>
                                <div className="divContaniner">
                                    <p className="textinput">Var % i.a.</p>
                                    <input
                                        placeholder="Var % i.a."
                                        type="text"
                                        value={var_ia_porcen}
                                        name="var_ia_porcen"
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
export default PreciosAgrosDiarios
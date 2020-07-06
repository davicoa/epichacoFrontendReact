import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../../style.css"

const PreciosAgrosDiarios = () => {

    const [date, setDate] = useState(new Date())
    const [tonelada, setTonelada] = useState("")
    const [varMens, setVarMens] = useState("")
    const [varIA, setVarIA] = useState("")

    const onDateChangeHandler = newDate => {
        //setDate(newDate)
    }
    const setImputHandler = e => {
        switch (e.target.name) {
            case "tonelada":
                //setTonelada(e.target.value)
                break;
            case "varMens":
                //setVarMens(e.target.value)
                break;
            case "varIA":
                //setVarIA(e.target.value)
                break;
            default:
                break;
        }
    }

    return (
        <div className="formContainer">
            <span className="tituloDatoACargar">Precios Agros Diarios</span>
            <form >
                <div className="divContaninerCenter">
                    <p className="textinput">Fecha:</p>
                    <DatePicker
                        className="divContaniner"
                        selected={date}
                        onChange={onDateChangeHandler}
                    />
                </div>
                <div className="divExterno">
                    <div className="divInterno">
                        <div className="divContaniner">
                            <p className="textinput">Grano</p>
                            <input
                                placeholder="Grano"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Valor Actual</p>
                            <input
                                placeholder="Valor Actual"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Variacion Diaria</p>
                            <input
                                placeholder="Variacion Diaria"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="divInterno">
                        <div className="divContaniner">
                            <p className="textinput">Var % diaria</p>
                            <input
                                placeholder="Var % diaria"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Var % mensual</p>
                            <input
                                placeholder="Var % mensual"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Var % i.a.</p>
                            <input
                                placeholder="Var % i.a."
                                type="text"
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
export default PreciosAgrosDiarios
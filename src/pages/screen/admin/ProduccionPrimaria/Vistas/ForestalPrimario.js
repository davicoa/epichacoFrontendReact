import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../../style.css"

const ForestalPrimario = () => {

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
            <span className="tituloDatoACargar">Forestal Primario</span>
            <form>
                <div className="divContaniner">
                    <p className="textinput">Fecha:</p>
                    <DatePicker
                        className="divContaniner"
                        selected={date}
                        onChange={onDateChangeHandler}
                    />
                </div>
                <div className="divContaniner">
                    <p className="textinput">Toneladas:</p>
                    <input
                        placeholder="Toneladas"
                        name="tonelada"
                        value={tonelada}
                        onChange={setImputHandler}
                        type="text"
                    />
                </div>
                <div className="divContaniner">
                    <p className="textinput">Var mens:</p>
                    <input
                        placeholder="Var mens"
                        name="varMens"
                        value={varMens}
                        onChange={setImputHandler}
                        type="text"
                    />
                </div>
                <div className="divContaniner">
                    <p className="textinput">Var i.a.:</p>
                    <input
                        placeholder="Var i.a."
                        name="varIA"
                        value={varIA}
                        onChange={setImputHandler}
                        type="text"
                    />
                </div>
                <button
                    className="botton"
                    type="submit"
                >
                    Guardar
                </button>
            </form>
        </div>
    );
}
export default ForestalPrimario
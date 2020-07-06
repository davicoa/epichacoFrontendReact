import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../../style.css"

const Faena = () => {

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
            <span className="tituloDatoACargar">Faena</span>
            <form>
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
                            <p className="textinput">Chaco:</p>
                            <input
                                placeholder="Chaco"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Var mens Chaco</p>
                            <input
                                placeholder="Var mens Chaco"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Var i.a. Chaco</p>
                            <input
                                placeholder="Var i.a. Chaco"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="divInterno">
                        <div className="divContaniner">
                            <p className="textinput">Nación:</p>
                            <input
                                placeholder="Nación"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Var mens Nación</p>
                            <input
                                placeholder="Var mens Nación"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Var i.a. Nación</p>
                            <input
                                placeholder="Var i.a. Nación"
                                type="text"
                            />
                        </div>
                    </div>
                </div>
                <div className="divContaninerCenter">
                    <p className="textinput">Categorías</p>
                    <input
                        placeholder="Categorías"
                        type="text"
                    />
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
export default Faena
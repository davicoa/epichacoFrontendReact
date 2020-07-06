import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../../style.css"

const PreciosGanaderos = () => {

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
            <span className="tituloDatoACargar">Precios Ganaderos</span>
            <form>
                <div className="divExterno">
                    <div className="divInterno">
                        <div className="divContaniner">
                            <p className="textinput">Fecha:</p>
                            <DatePicker
                                className="divContaniner"
                                selected={date}
                                onChange={onDateChangeHandler}
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Vaca abasto</p>
                            <input
                                placeholder="Vaca abasto"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Vaca ivernada</p>
                            <input
                                placeholder="Vaca ivernada"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Vaquilla preñana</p>
                            <input
                                placeholder="Vaquilla preñana"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Novillo</p>
                            <input
                                placeholder="Novillo"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Novillitos</p>
                            <input
                                placeholder="Novillitos"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="divInterno">
                        <div className="divContaniner">
                            <p className="textinput">Zona</p>
                            <input
                                placeholder="Zona"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Vaquilla</p>
                            <input
                                placeholder="Vaquilla"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Toro</p>
                            <input
                                placeholder="Toro"
                                type="text"
                            />
                        </div>
                        
                        <div className="divContaniner">
                            <p className="textinput">Ternero</p>
                            <input
                                placeholder="Ternero"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Ternera</p>
                            <input
                                placeholder="Ternera"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Ternero/as</p>
                            <input
                                placeholder="Ternero/as"
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
        </div >
    );
}
export default PreciosGanaderos
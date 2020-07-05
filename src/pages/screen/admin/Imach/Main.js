import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../style.css"

const Produccion = () => {

    const [date, setDate] = useState(new Date())
    const [tonelada, setTonelada] = useState("")
    const [varMens, setVarMens] = useState("")
    const [varIA, setVarIA] = useState("")

    const saveToDb = async e => {
        e.preventDefault()
        const rawResponse = await fetch('http://127.0.0.1:4000/api/produccionPrimaria', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
                fecha: date,
                producto: tonelada,
                tonelada: tonelada,
                var_mens: varMens,
                var_ia: varIA
            })
        });
        //respuesta de si se gurado correctamente o no
        const content = await rawResponse.json()

        setDate(new Date())
        setTonelada("")
        setVarMens("")
        setVarIA("")
        console.log(content);
    }
    const onDateChangeHandler = newDate => {
        setDate(newDate)
    }
    const setImputHandler = e => {
        switch (e.target.name) {
            case "tonelada":
                setTonelada(e.target.value)
                break;
            case "varMens":
                setVarMens(e.target.value)
                break;
            case "varIA":
                setVarIA(e.target.value)
                break;
            default:
                break;
        }
    }
    return (
        <div className="formContainer">
            <div className="divContaniner">
                <p className="textinput">Producto:</p>
                <select>
                    <option>La primera opción</option>
                    <option>La segunda opción</option>
                    <option>La tercera opción</option>
                </select>
            </div>
            <form onSubmit={saveToDb}>
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
export default Produccion
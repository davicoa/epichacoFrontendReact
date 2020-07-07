import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../../style.css"

const PreciosAgrosDiarios =(props) => {

  

    return (
        <div className="formContainer">
            <span className="tituloDatoACargar">Precios Agros Diarios</span>
            <form >
                <div className="divContaninerCenter">
                    <p className="textinput">Fecha:</p>
                    <DatePicker
                        className="divContaniner"
                       
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
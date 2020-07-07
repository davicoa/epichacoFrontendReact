import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../../style.css"

const StockBovinoPorcino = (props) => {

    return (
        <div className="formContainer">
            <span className="tituloDatoACargar">Stock Bovino/Porcino</span>
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
                            <p className="textinput">sector_id</p>
                            <input
                                placeholder="sector_id"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">sector_nombre</p>
                            <input
                                placeholder="sector_nombre"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">variable_id</p>
                            <input
                                placeholder="variable_id"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">actividad_producto_nombre</p>
                            <input
                                placeholder="actividad_producto_nombre"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Indicador</p>
                            <input
                                placeholder="Indicador"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">unidad_de_medida</p>
                            <input
                                placeholder="unidad_de_medida"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">fuerte</p>
                            <input
                                placeholder="fuerte"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="divInterno">
                        <div className="divContaniner">
                            <p className="textinput">frecuencia_nombre</p>
                            <input
                                placeholder="frecuencia_nombre"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">cobertura_nombre</p>
                            <input
                                placeholder="cobertura_nombre"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">alcance_tipo</p>
                            <input
                                placeholder="alcance_tipo"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">alcance_id</p>
                            <input
                                placeholder="alcance_id"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">alcance_nombre</p>
                            <input
                                placeholder="alcance_nombre"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">valor</p>
                            <input
                                placeholder="valor"
                                type="text"
                            />
                        </div>
                        <div className="divContaniner">
                            <p className="textinput">Total Cabezas</p>
                            <input
                                placeholder="Total Cabezas"
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
export default StockBovinoPorcino
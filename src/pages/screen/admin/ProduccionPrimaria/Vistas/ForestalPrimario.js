import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const ForestalPrimario = (props) => {
  const obj = props.obj;
  const [date, setFecha] = useState(new Date());
  const [producto, setProducto] = useState(typeof obj !== "undefined" ? obj.producto : "");
  const [toneladas, setToneladas] = useState(typeof obj !== "undefined" ? obj.toneladas : "");
  const [var_mens, setVar_mens] = useState(typeof obj !== "undefined" ? obj.var_mens : "");
  const [var_ia, setVar_ia] = useState(typeof obj !== "undefined" ? obj.var_ia : "");

  const setFechaHandler = Date =>{
      setFecha(Date);
  }

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "producto":
        setProducto(e.target.value);
        break;
      case "toneladas":
        setToneladas(e.target.value);
        break;
      case "var_mens":
        setVar_mens(e.target.value);
        break;
      case "var_ia":
        setVar_ia(e.target.value);
        break;
      default:
        break;
    }
  };

  const savetobd = (e) => {
    e.preventDefault();
    let fecha = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
    props.saveToDb("forestalPrimario", {
      fecha,
      producto,
      toneladas,
      var_mens,
      var_ia,
    });
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">Forestal Primario</span>
        <form onSubmit={savetobd}>
          <div className="divContaniner">
            <p className="textinput">Fecha:</p>
            <DatePicker
              className="divContaniner"
              dateFormat="dd/MM/yyyy"
              selected={date}
              name="fecha"
              onChange={Date =>setFechaHandler(Date)}
            />
          </div>
          <div className="divContaniner">
            <p className="textinput">producto:</p>
            <select 
                  value={producto}
                  name="producto"
                  onChange={setImputHandler}
                  required
                >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="Carbón a granel">Carbón a granel</option> 
                <option value="Carbón en bolsa" >Carbón en bolsa</option>
                <option value="Rollos" >Rollos</option>
                <option value="Rollizos" >Rollizos</option>
              </select>
          </div>
          <div className="divContaniner">
            <p className="textinput">Toneladas:</p>
            <input
              placeholder="Toneladas"
              name="toneladas"
              value={toneladas}
              onChange={setImputHandler}
              type="text"
            />
          </div>
          <div className="divContaniner">
            <p className="textinput">Var mens:</p>
            <input
              placeholder="Var mens"
              name="var_mens"
              value={var_mens}
              onChange={setImputHandler}
              type="text"
            />
          </div>
          <div className="divContaniner">
            <p className="textinput">Var i.a.:</p>
            <input
              placeholder="Var i.a."
              name="var_ia"
              value={var_ia}
              onChange={setImputHandler}
              type="text"
            />
          </div>
          <div className="divContaninerCenter">
            <button className="botton" type="submit">
              Guardar
            </button>
          </div>
        </form>
    </div>
  );
};
export default ForestalPrimario;

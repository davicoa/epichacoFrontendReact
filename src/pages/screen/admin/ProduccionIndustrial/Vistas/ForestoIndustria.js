import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const ForestoIndustria = (props) => {
  const obj = props.obj;
  const [date, setFecha] = useState(new Date());
  const [tipo_produccion, setTipo_produccion] = useState(typeof obj !== "undefined" ? obj.tipo_produccion : "");
  const [toneladas, setToneladas] = useState(typeof obj !== "undefined" ? obj.toneladas : "");
  const [var_mens, setVar_mens] = useState(typeof obj !== "undefined" ? obj.var_mens : "");
  const [var_ia, setVar_ia] = useState(typeof obj !== "undefined" ? obj.var_ia : "");

  const setFechaHandler = Date => {
    setFecha(Date);
  }

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "tipo_produccion":
        setTipo_produccion(e.target.value);
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
    props.saveToDb("forestoIndustria", {
      fecha,
      tipo_produccion,
      toneladas,
      var_mens,
      var_ia,
    });
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">Foresto Industria</span>
      <form onSubmit={savetobd}>
        <div className="divContaninerCenter">
          <p className="textinput">Fecha:</p>
          <DatePicker
            className="divContaniner"
            dateFormat="dd/MM/yyyy"
            selected={date}
            name="fecha"
            onChange={Date => setFechaHandler(Date)}
          />
        </div>
        <div className="divExterno">
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">Tipo Produccion</p>
              <select
                value={tipo_produccion}
                name="tipo_produccion"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="Aberturas">Aberturas</option>
                <option value="Muebles">Muebles</option>
                <option value="Tanino">Tanino</option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">Toneladas</p>
              <input
                placeholder="Toneladas"
                type="text"
                value={toneladas}
                name="toneladas"
                onChange={setImputHandler}
              />
            </div>
          </div>
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">Var mensual</p>
              <input
                placeholder="Var mensual"
                type="text"
                value={var_mens}
                name="var_mens"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">Var i.a.</p>
              <input
                placeholder="Var i.a."
                type="text"
                value={var_ia}
                name="var_ia"
                onChange={setImputHandler}
              />
            </div>
          </div>
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
export default ForestoIndustria;

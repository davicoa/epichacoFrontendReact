import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const Empleoieric = (props) => {
  const obj = props.obj;
  let aux = typeof obj !== "undefined"? obj.fecha.split("/"):"undefined"
  const [date, setFecha] = useState(aux !== "undefined" ? new Date(aux[1]+'/'+aux[0]+'/'+aux[2]) : new Date());
  const [empleo_chaco, setEmpleo_chaco] = useState(
    typeof obj !== "undefined" ? obj.empleo_chaco : ""
  );
  const [
    var_porcen_mensual_empleo_chaco,
    setVar_porcen_mensual_empleo_chaco,
  ] = useState(
    typeof obj !== "undefined" ? obj.var_porcen_mensual_empleo_chaco : ""
  );
  const [var_porcen_ia_empleo_chaco, setVar_porcen_ia_empleo_chaco] = useState(
    typeof obj !== "undefined" ? obj.var_porcen_ia_empleo_chaco : ""
  );
  const [empleo_nacion, setEmpleo_nacion] = useState(
    typeof obj !== "undefined" ? obj.empleo_nacion : ""
  );
  const [
    var_porcen_mensual_empleo_nacion,
    setVar_porcen_mensual_empleo_nacion,
  ] = useState(
    typeof obj !== "undefined" ? obj.var_porcen_mensual_empleo_nacion : ""
  );
  const [
    var_porcen_ia_empleo_nacion,
    setVar_porcen_ia_empleo_nacion,
  ] = useState(
    typeof obj !== "undefined" ? obj.var_porcen_ia_empleo_nacion : ""
  );
  const [indice_empleo_chaco, setIndice_empleo_chaco] = useState(
    typeof obj !== "undefined" ? obj.indice_empleo_chaco : ""
  );
  const [indice_empleo_nacion, setIndice_empleo_nacion] = useState(
    typeof obj !== "undefined" ? obj.indice_empleo_nacion : ""
  );

  const setFechaHandler = (Date) => {
    setFecha(Date);
  };

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "empleo_chaco":
        setEmpleo_chaco(e.target.value);
        break;
      case "var_porcen_mensual_empleo_chaco":
        setVar_porcen_mensual_empleo_chaco(e.target.value);
        break;
      case "var_porcen_ia_empleo_chaco":
        setVar_porcen_ia_empleo_chaco(e.target.value);
        break;
      case "empleo_nacion":
        setEmpleo_nacion(e.target.value);
        break;
      case "var_porcen_mensual_empleo_nacion":
        setVar_porcen_mensual_empleo_nacion(e.target.value);
        break;
      case "var_porcen_ia_empleo_nacion":
        setVar_porcen_ia_empleo_nacion(e.target.value);
        break;
      case "indice_empleo_chaco":
        setIndice_empleo_chaco(e.target.value);
        break;
      case "indice_empleo_nacion":
        setIndice_empleo_nacion(e.target.value);
        break;
      default:
        break;
    }
  };

  const savetobd = (e) => {
    e.preventDefault();
    let fecha = date.getUTCDate().toString().padStart(2, "0")+"/"+(date.getUTCMonth()+1).toString().padStart(2, "0")+"/"+date.getUTCFullYear()
    props.saveToDb("empleoIERIC", {
      fecha,
      empleo_chaco,
      var_porcen_mensual_empleo_chaco,
      var_porcen_ia_empleo_chaco,
      empleo_nacion,
      var_porcen_mensual_empleo_nacion,
      var_porcen_ia_empleo_nacion,
      indice_empleo_chaco,
      indice_empleo_nacion,
    });
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">Empleo IERIC</span>

      <form onSubmit={savetobd}>
        <div className="divExterno">
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">Fecha:</p>
              <DatePicker
                className="divContaniner"
                dateFormat="dd/MM/yyyy"
                selected={date}
                name="fecha"
                onChange={(Date) => setFechaHandler(Date)}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">empleo_chaco</p>
              <input
                placeholder="empleo_chaco"
                type="text"
                value={empleo_chaco}
                name="empleo_chaco"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_porcen_mensual_empleo_chaco</p>
              <input
                placeholder="var_porcen_mensual_empleo_chaco"
                type="text"
                value={var_porcen_mensual_empleo_chaco}
                name="var_porcen_mensual_empleo_chaco"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_porcen_ia_empleo_chaco</p>
              <input
                placeholder="var_porcen_ia_empleo_chaco"
                type="text"
                value={var_porcen_ia_empleo_chaco}
                name="var_porcen_ia_empleo_chaco"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">empleo_nacion</p>
              <input
                placeholder="empleo_nacion"
                type="text"
                value={empleo_nacion}
                name="empleo_nacion"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_porcen_mensual_empleo_nacion</p>
              <input
                placeholder="var_porcen_mensual_empleo_nacion"
                type="text"
                value={var_porcen_mensual_empleo_nacion}
                name="var_porcen_mensual_empleo_nacion"
                onChange={setImputHandler}
              />
            </div>
          </div>
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">var_porcen_ia_empleo_nacion</p>
              <input
                placeholder="var_porcen_ia_empleo_nacion"
                type="text"
                value={var_porcen_ia_empleo_nacion}
                name="var_porcen_ia_empleo_nacion"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">indice_empleo_chaco</p>
              <input
                placeholder="indice_empleo_chaco"
                type="text"
                value={indice_empleo_chaco}
                name="indice_empleo_chaco"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">indice_empleo_nacion</p>
              <input
                placeholder="indice_empleo_nacion"
                type="text"
                value={indice_empleo_nacion}
                name="indice_empleo_nacion"
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
export default Empleoieric;

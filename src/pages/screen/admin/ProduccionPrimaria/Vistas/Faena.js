import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const Faena = (props) => {
  const obj = props.obj;
  const [fecha, setFecha] = useState(new Date());
  const [chaco, setChaco] = useState( typeof obj !== "undefined" ? obj.chaco : "");
  const [var_mensual_chaco, setVar_mensual_chaco] = useState( typeof obj !== "undefined" ? obj.var_mensual_chaco : "");
  const [var_ia_chaco, setVar_ia_chaco] = useState( typeof obj !== "undefined" ? obj.var_ia_chaco : "");
  const [nacion, setNacion] = useState( typeof obj !== "undefined" ? obj.nacion : "");
  const [var_mensual_nacion, setVar_mensual_nacion] = useState( typeof obj !== "undefined" ? obj.var_mensual_nacion : "");
  const [var_ia_nacion, setVar_ia_nacion] = useState( typeof obj !== "undefined" ? obj.var_ia_nacion : "");
  const [categoria, setCategoria] = useState( typeof obj !== "undefined" ? obj.categoria : "");

  const setFechaHandler = Date => {
    setFecha(Date);
  }

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "chaco":
        setChaco(e.target.value);
        break;
      case "var_mensual_chaco":
        setVar_mensual_chaco(e.target.value);
        break;
      case "var_ia_chaco":
        setVar_ia_chaco(e.target.value);
        break;
      case "nacion":
        setNacion(e.target.value);
        break;
      case "var_mensual_nacion":
        setVar_mensual_nacion(e.target.value);
        break;
      case "var_ia_nacion":
        setVar_ia_nacion(e.target.value);
        break;
      case "categoria":
        setCategoria(e.target.value);
        break;
      default:
        break;
    }
  };

  const savetobd = (e) => {
    e.preventDefault();
    props.saveToDb("faena", {
      fecha,
      chaco,
      var_mensual_chaco,
      var_ia_chaco,
      nacion,
      var_mensual_nacion,
      var_ia_nacion,
      categoria,
    });
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">Faena</span>
          <form onSubmit={savetobd}>
            <div className="divContaninerCenter">
              <p className="textinput">Fecha:</p>
              <DatePicker
                className="divContaniner"
                dateFormat="dd/MM/yyyy"
                selected={fecha}
                name="fecha"
                onChange={Date => setFechaHandler(Date)}
              />
            </div>
            <div className="divExterno">
              <div className="divInterno">
                <div className="divContaniner">
                  <p className="textinput">Chaco:</p>
                  <input
                    placeholder="Chaco"
                    type="text"
                    value={chaco}
                    name="chaco"
                    onChange={setImputHandler}
                  />
                </div>
                <div className="divContaniner">
                  <p className="textinput">Var mens Chaco</p>
                  <input
                    placeholder="Var mens Chaco"
                    type="text"
                    value={var_mensual_chaco}
                    name="var_mensual_chaco"
                    onChange={setImputHandler}
                  />
                </div>
                <div className="divContaniner">
                  <p className="textinput">Var i.a. Chaco</p>
                  <input
                    placeholder="Var i.a. Chaco"
                    type="text"
                    value={var_ia_chaco}
                    name="var_ia_chaco"
                    onChange={setImputHandler}
                  />
                </div>
              </div>
              <div className="divInterno">
                <div className="divContaniner">
                  <p className="textinput">Nación:</p>
                  <input
                    placeholder="Nación"
                    type="text"
                    value={nacion}
                    name="nacion"
                    onChange={setImputHandler}
                  />
                </div>
                <div className="divContaniner">
                  <p className="textinput">Var mens Nación</p>
                  <input
                    placeholder="Var mens Nación"
                    type="text"
                    value={var_mensual_nacion}
                    name="var_mensual_nacion"
                    onChange={setImputHandler}
                  />
                </div>
                <div className="divContaniner">
                  <p className="textinput">Var i.a. Nación</p>
                  <input
                    placeholder="Var i.a. Nación"
                    type="text"
                    value={var_ia_nacion}
                    name="var_ia_nacion"
                    onChange={setImputHandler}
                  />
                </div>
              </div>
            </div>
            <div className="divContaninerCenter">
              <p className="textinput">Categorías</p>
              <select 
                  value={categoria}
                  name="categoria"
                  onChange={setImputHandler}
                  required
                >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="Bovino">Bovino</option> 
                <option value="Porcino" >Porcino</option>
              </select>
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
export default Faena;

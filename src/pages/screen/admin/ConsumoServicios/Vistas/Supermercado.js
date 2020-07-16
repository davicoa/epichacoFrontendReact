import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Supermercado = (props) => {
  const obj = props.obj;
  const [date, setFecha] = useState(new Date());
  const [producto, setProducto] = useState(
    typeof obj !== "undefined" ? obj.producto : ""
  );
  const [valor_sin_est_chaco, setValor_sin_est_chaco] = useState(
    typeof obj !== "undefined" ? obj.valor_sin_est_chaco : ""
  );
  const [var_mens_chaco, setVar_mens_chaco] = useState(
    typeof obj !== "undefined" ? obj.var_mens_chaco : ""
  );
  const [var_ia_chaco, setVar_ia_chaco] = useState(
    typeof obj !== "undefined" ? obj.var_ia_chaco : ""
  );
  const [valor_sin_est_nacion, setValor_sin_est_nacion] = useState(
    typeof obj !== "undefined" ? obj.valor_sin_est_nacion : ""
  );
  const [var_mens_nacion, setVar_mens_nacion] = useState(
    typeof obj !== "undefined" ? obj.var_mens_nacion : ""
  );
  const [var_ia_nacion, setVar_ia_nacion] = useState(
    typeof obj !== "undefined" ? obj.var_ia_nacion : ""
  );
  const [valor_con_est_chaco, setValor_con_est_chaco] = useState(
    typeof obj !== "undefined" ? obj.valor_con_est_chaco : ""
  );
  const [var_mens_c_e_chaco, setVar_mens_c_e_chaco] = useState(
    typeof obj !== "undefined" ? obj.var_mens_c_e_chaco : ""
  );
  const [var_ia_c_e_chaco, setVar_ia_c_e_chaco] = useState(
    typeof obj !== "undefined" ? obj.var_ia_c_e_chaco : ""
  );
  const [valor_con_est_nacion, setValor_con_est_nacion] = useState(
    typeof obj !== "undefined" ? obj.valor_con_est_nacion : ""
  );
  const [var_mens_c_e_nacion, setVar_mens_c_e_nacion] = useState(
    typeof obj !== "undefined" ? obj.var_mens_c_e_nacion : ""
  );
  const [var_ia_c_e_nacion, setVar_ia_c_e_nacion] = useState(
    typeof obj !== "undefined" ? obj.var_ia_c_e_nacion : ""
  );

  const setFechaHandler = (Date) => {
    setFecha(Date);
  };

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "producto":
        setProducto(e.target.value);
        break;
      case "valor_sin_est_chaco":
        setValor_sin_est_chaco(e.target.value);
        break;
      case "var_mens_chaco":
        setVar_mens_chaco(e.target.value);
        break;
      case "var_ia_chaco":
        setVar_ia_chaco(e.target.value);
        break;
      case "valor_sin_est_nacion":
        setValor_sin_est_nacion(e.target.value);
        break;
      case "var_mens_nacion":
        setVar_mens_nacion(e.target.value);
        break;
      case "var_ia_nacion":
        setVar_ia_nacion(e.target.value);
        break;
      case "valor_con_est_chaco":
        setValor_con_est_chaco(e.target.value);
        break;
      case "var_mens_c_e_chaco":
        setVar_mens_c_e_chaco(e.target.value);
        break;
      case "var_ia_c_e_chaco":
        setVar_ia_c_e_chaco(e.target.value);
        break;
      case "valor_con_est_nacion":
        setValor_con_est_nacion(e.target.value);
        break;
      case "var_mens_c_e_nacion":
        setVar_mens_c_e_nacion(e.target.value);
        break;
      case "var_ia_c_e_nacion":
        setVar_ia_c_e_nacion(e.target.value);
        break;
      default:
        break;
    }
  };

  const savetobd = (e) => {
    e.preventDefault();
    let fecha = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
    props.saveToDb("supermercado", {
      fecha,
      producto,
      valor_sin_est_chaco,
      var_mens_chaco,
      var_ia_chaco,
      valor_sin_est_nacion,
      var_mens_nacion,
      var_ia_nacion,
      valor_con_est_chaco,
      var_mens_c_e_chaco,
      var_ia_c_e_chaco,
      valor_con_est_nacion,
      var_mens_c_e_nacion,
      var_ia_c_e_nacion,
    });
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">
        Supermercado EXCEL Var Mensual/Var i.a. Repet
      </span>

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
              <p className="textinput">valor_sin_est_chaco</p>
              <input
                placeholder="valor_sin_est_chaco"
                type="text"
                value={valor_sin_est_chaco}
                name="valor_sin_est_chaco"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_mens_chaco</p>
              <input
                placeholder="var_mens_chaco"
                type="text"
                value={var_mens_chaco}
                name="var_mens_chaco"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_ia_chaco</p>
              <input
                placeholder="var_ia_chaco"
                type="text"
                value={var_ia_chaco}
                name="var_ia_chaco"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">valor_con_est_chaco</p>
              <input
                placeholder="valor_con_est_chaco"
                type="text"
                value={valor_con_est_chaco}
                name="valor_con_est_chaco"
                onChange={setImputHandler}
              />
            </div>

            <div className="divContaniner">
              <p className="textinput">var_mens_c_e_chaco</p>
              <input
                placeholder="var_mens_c_e_chaco"
                type="text"
                value={var_mens_c_e_chaco}
                name="var_mens_c_e_chaco"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_ia_c_e_chaco</p>
              <input
                placeholder="var_ia_c_e_chaco"
                type="text"
                value={var_ia_c_e_chaco}
                name="var_ia_c_e_chaco"
                onChange={setImputHandler}
              />
            </div>
          </div>
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">producto</p>
              <select
                value={producto}
                name="producto"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>
                  Seleccione una opcion
                </option>
                <option value="Valores Corrientes">Valores Corrientes</option>
                <option value="Valores Constantes (Base=2017)">
                  Valores Constantes (Base=2017)
                </option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">valor_sin_est_nacion</p>
              <input
                placeholder="valor_sin_est_nacion"
                type="text"
                value={valor_sin_est_nacion}
                name="valor_sin_est_nacion"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_mens_nacion</p>
              <input
                placeholder="var_mens_s_e_nacion"
                type="text"
                value={var_mens_nacion}
                name="var_mens_nacion"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_ia_nacion</p>
              <input
                placeholder="var_ia_nacion"
                type="text"
                value={var_ia_nacion}
                name="var_ia_nacion"
                onChange={setImputHandler}
              />
            </div>

            <div className="divContaniner">
              <p className="textinput">valor_con_est_nacion</p>
              <input
                placeholder="valor_con_est_nacion"
                type="text"
                value={valor_con_est_nacion}
                name="valor_con_est_nacion"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_mens_c_e_nacion</p>
              <input
                placeholder="var_mens_c_e_nacion"
                type="text"
                value={var_mens_c_e_nacion}
                name="var_mens_c_e_nacion"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_ia_c_e_nacion</p>
              <input
                placeholder="var_ia_c_e_nacion"
                type="text"
                value={var_ia_c_e_nacion}
                name="var_ia_c_e_nacion"
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

export default Supermercado;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const ForestalPrimario = (props) => {
  const obj = props.obj;
  const [fecha, setFecha] = useState(new Date());
  const [indice, setIndice] = useState(
    typeof obj !== "undefined" ? obj.indice : ""
  );
  const [valor, setValor] = useState(
    typeof obj !== "undefined" ? obj.valor : ""
  );
  const [var_mens, setVar_mens] = useState(
    typeof obj !== "undefined" ? obj.var_mens : ""
  );
  const [var_ia, setVar_ia] = useState(
    typeof obj !== "undefined" ? obj.var_ia : ""
  );

  const setFechaHandler = (Date) => {
    setFecha(Date);
  };

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "indice":
        setIndice(e.target.value);
        break;
      case "valor":
        setValor(e.target.value);
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
    props.saveToDb("imach", {
      fecha,
      indice,
      valor,
      var_mens,
      var_ia,
    });
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">IMACH</span>
      <form onSubmit={savetobd}>
        <div className="divContaninerCenter">
          <p className="textinput">Fecha:</p>
          <DatePicker
            className="divContaniner"
            dateFormat="dd/MM/yyyy"
            selected={fecha}
            name="fecha"
            onChange={(Date) => setFechaHandler(Date)}
          />
        </div>
        <div className="divExterno">
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">Indice</p>
              <select
                value={indice}
                name="indice"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>
                  Seleccione una opcion
                </option>
                <option value="IMACH">IMACH</option>
                <option value="Gas Oil">Gas Oil</option>
                <option value="Coparticipación">Coparticipación</option>
                <option value="Cemento">Cemento</option>
                <option value="Patentamientos">Patentamientos</option>
                <option value="Energía Industrial">Energía Industrial</option>
                <option value="Supermercados">Supermercados</option>
                <option value="Empleo Formal">Empleo Formal</option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">Valor</p>
              <input
                placeholder="Valor"
                type="text"
                value={valor}
                name="valor"
                onChange={setImputHandler}
              />
            </div>
          </div>
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">var_mens</p>
              <input
                placeholder="var_mens"
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
export default ForestalPrimario;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ClipLoader from "react-spinners/ClipLoader";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const ForestoIndustria = (props) => {

  const [fecha, setFecha] = useState(new Date());
  const [tipo_produccion, setTipo_produccion] = useState("");
  const [toneladas, setToneladas] = useState("");
  const [var_mens, setVar_mens] = useState("");
  const [var_ia, setVar_ia] = useState("");

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "fecha":
        setFecha(e.target.value);
        break;
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
      {props.loading ? (
        <ClipLoader
          css={("display: block", "margin: 0 auto", "border-color: blue")}
          size={150}
          color={"#123abc"}
          loading={props.loading}
        />
      ) : (
          <form onSubmit={savetobd}>
            <div className="divContaninerCenter">
              <p className="textinput">Fecha:</p>
              <DatePicker
                className="divContaniner"
                selected={fecha}
                name="fecha"
                onChange={setImputHandler}
              />
            </div>
            <div className="divExterno">
              <div className="divInterno">
                <div className="divContaniner">
                  <p className="textinput">Tipo Produccion</p>
                  <input
                    placeholder="tipo_produccion"
                    type="text"
                    value={tipo_produccion}
                    name="tipo_produccion"
                    onChange={setImputHandler}
                  />
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
        )}
      <div className="divMsgBottom">
        <span
          style={{ color: props.msg === "Fallo en la carga" ? "red" : "green" }}
        >
          {props.msg}
        </span>
      </div>
    </div>
  );
};
export default ForestoIndustria;

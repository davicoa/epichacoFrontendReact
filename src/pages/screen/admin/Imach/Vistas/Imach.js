import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ClipLoader from "react-spinners/ClipLoader";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const ForestalPrimario = (props) => {
  const [fecha, setFecha] = useState(new Date());
  const [producto, setProducto] = useState("");
  const [toneladas, setToneladas] = useState("");
  const [var_mens, setVar_mens] = useState("");
  const [var_ia, setVar_ia] = useState("");

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "fecha":
        setFecha(e.target.value);
        break;
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
      {props.loading ? (
        <ClipLoader
          css={("display: block", "margin: 0 auto", "border-color: blue")}
          size={150}
          color={"#123abc"}
          loading={props.loading}
        />
      ) : (
        <form onSubmit={savetobd}>
          <div className="divContaniner">
            <p className="textinput">Fecha:</p>
            <DatePicker
              className="divContaniner"
              selected={fecha}
              name="fecha"
              onChange={setImputHandler}
            />
          </div>
          <div className="divContaniner">
            <p className="textinput">producto:</p>
            <input
              placeholder="producto"
              name="producto"
              value={producto}
              onChange={setImputHandler}
              type="text"
            />
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
export default ForestalPrimario;

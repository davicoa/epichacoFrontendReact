import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ClipLoader from "react-spinners/ClipLoader";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const Faena = (props) => {
  const [fecha, setFecha] = useState(new Date());
  const [chaco, setChaco] = useState("");
  const [var_mensual_chaco, setVar_mensual_chaco] = useState("");
  const [var_ia_chaco, setVar_ia_chaco] = useState("");
  const [nacion, setNacion] = useState("");
  const [var_mensual_nacion, setVar_mensual_nacion] = useState("");
  const [var_ia_nacion, setVar_ia_nacion] = useState("");
  const [categoria, setCategoria] = useState("");

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "fecha":
        setFecha(e.target.value);
        break;
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
            <input
                  placeholder="Categorías"
                  type="text"
                  value={categoria}
                  name="categoria"
                  onChange={setImputHandler}
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
export default Faena;

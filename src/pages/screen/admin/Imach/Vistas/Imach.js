import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ClipLoader from "react-spinners/ClipLoader";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const ForestalPrimario = (props) => {

  const [fecha, setFecha] = useState(new Date());
  const [indice, setIndice] = useState("");
  const [valor, setValor] = useState("");
  const [var_mens, setVar_mens] = useState("");
  const [var_ia, setVar_ia] = useState("");

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "fecha":
        setFecha(e.target.value);
        break;
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
                  <p className="textinput">Indice</p>
                  <input
                    placeholder="Indice"
                    type="text"
                    value={indice}
                    name="indice"
                    onChange={setImputHandler}
                  />
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

import React, { useState } from "react"
import DatePicker from "react-datepicker"
import ClipLoader from "react-spinners/ClipLoader"
import "react-datepicker/dist/react-datepicker.css"

const IPCGResis = props => {

    const [fecha, setFecha] = useState(new Date());
    const [sector, setSector] = useState("");
    const [ipc, setIpc] = useState("");
    const [var_mensual, setVar_mensual] = useState("");
    const [var_ia, setVar_ia] = useState("");
  
    const setImputHandler = (e) => {
      switch (e.target.name) {
        case "fecha":
          setFecha(e.target.value);
          break;
        case "sector":
            setSector(e.target.value);
          break;
        case "var_mensual":
          setVar_mensual(e.target.value);
          break;
        case "var_ia":
          setVar_ia(e.target.value);
          break;
        case "ipc":
            setIpc(e.target.value);
          break;
        default:
          break;
      }
    };
  
    const savetobd = (e) => {
      e.preventDefault();
      props.saveToDb("preciosAgroMensuales", {
        fecha,
        sector,
        ipc,
        var_mensual,
        var_ia,
      });
    };

    return (
        <div className="formContainer">
          <span className="tituloDatoACargar">IPC-GR RESIS</span>
          {props.loading ? (
            <ClipLoader
              css={("display: block", "margin: 0 auto", "border-color: blue")}
              size={150}
              color={"#123abc"}a
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
                    <p className="textinput">Sector</p>
                    <input
                      placeholder="Sector"
                      type="text"
                      value={sector}
                      name="sector"
                      onChange={setImputHandler}
                    />
                  </div>
                  <div className="divContaniner">
                    <p className="textinput">Var mensual</p>
                    <input
                      placeholder="Var mensual"
                      type="text"
                      value={var_mensual}
                      name="var_mensual"
                      onChange={setImputHandler}
                    />
                  </div>
                </div>
                <div className="divInterno">
                  <div className="divContaniner">
                    <p className="textinput">IPC</p>
                    <input
                      placeholder="IPC"
                      type="text"
                      value={ipc}
                      name="ipc"
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
}

export default IPCGResis
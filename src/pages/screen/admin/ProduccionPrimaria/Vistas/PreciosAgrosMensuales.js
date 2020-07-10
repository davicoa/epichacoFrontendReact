import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ClipLoader from "react-spinners/ClipLoader";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const PreciosAgrosMensuales = (props) => {
  const [fecha, setFecha] = useState(new Date());
  const [precio, setPrecio] = useState("");
  const [var_mensual, setVar_mensual] = useState("");
  const [var_ia, setVar_ia] = useState("");
  const [producto, setProducto] = useState("");

  const setFechaHandler = Date => {
    setFecha(Date);
  }

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "precio":
        setPrecio(e.target.value);
        break;
      case "var_mensual":
        setVar_mensual(e.target.value);
        break;
      case "var_ia":
        setVar_ia(e.target.value);
        break;
      case "producto":
        setProducto(e.target.value);
        break;
      default:
        break;
    }
  };

  const savetobd = (e) => {
    e.preventDefault();
    props.saveToDb("preciosAgroMensuales", {
      fecha,
      precio,
      var_mensual,
      var_ia,
      producto,
    });
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">Precios Agros Mensuales</span>
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
                dateFormat="dd/MM/yyyy"
                selected={fecha}
                name="fecha"
                onChange={Date => setFechaHandler(Date)}
              />
            </div>
            <div className="divExterno">
              <div className="divInterno">
                <div className="divContaniner">
                  <p className="textinput">Precio</p>
                  <input
                    placeholder="Precio"
                    type="text"
                    value={precio}
                    name="precio"
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
                  <p className="textinput">Producto</p>
                  <input
                    placeholder="Producto"
                    type="text"
                    value={producto}
                    name="producto"
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
export default PreciosAgrosMensuales;

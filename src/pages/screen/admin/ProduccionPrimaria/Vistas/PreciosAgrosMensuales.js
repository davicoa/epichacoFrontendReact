import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const PreciosAgrosMensuales = (props) => {
  const obj = props.obj;
  const [fecha, setFecha] = useState(new Date());
  const [precio, setPrecio] = useState(typeof obj !== "undefined" ? obj.precio : "");
  const [var_mensual, setVar_mensual] = useState(typeof obj !== "undefined" ? obj.var_mensual : "");
  const [var_ia, setVar_ia] = useState(typeof obj !== "undefined" ? obj.var_ia : "");
  const [producto, setProducto] = useState(typeof obj !== "undefined" ? obj.producto : "");

  const setFechaHandler = (Date) => {
    setFecha(Date);
  };

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
              <select
                value={producto}
                name="producto"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled> Seleccione una opcion</option>
                <option value="Arroz U$S| Tonelada">Arroz U$S| Tonelada</option>
                <option value="Sorgo U$S| Tonelada">Sorgo U$S| Tonelada</option>
                <option value="Fibra de Algodón-Mercado Interno U$S| KG">Fibra de Algodón-Mercado Interno U$S| KG</option>
                <option value="Fibra de Algodón FOB Bs As C-1/2 U$S | CTS | Libra">Fibra de Algodón FOB Bs As C-1/2 U$S | CTS | Libra</option>
              </select>
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
export default PreciosAgrosMensuales;

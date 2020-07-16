import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const StockBovinoPorcino = (props) => {
  const obj = props.obj;
  const [date, setFecha] = useState(new Date());
  const [sector_id, setSector_id] = useState(typeof obj !== "undefined" ? obj.sector_id : "");
  const [sector_nombre, setSector_nombre] = useState(typeof obj !== "undefined" ? obj.sector_nombre : "");
  const [variable_id, setVariable_id] = useState(typeof obj !== "undefined" ? obj.variable_id : "");
  const [actividad_producto_nombre, setActividad_producto_nombre] = useState(
    typeof obj !== "undefined" ? obj.actividad_producto_nombre : ""
  );
  const [indicador, setIndicador] = useState(typeof obj !== "undefined" ? obj.indicador : "");
  const [unidad_de_medida, setUnidad_de_medida] = useState(typeof obj !== "undefined" ? obj.unidad_de_medida : "");
  const [fuerte, setFuerte] = useState(typeof obj !== "undefined" ? obj.fuerte : "");
  const [frecuencia_nombre, setfrecuencia_nombre] = useState(typeof obj !== "undefined" ? obj.frecuencia_nombre : "");
  const [cobertura_nombre, setCobertura_nombre] = useState(typeof obj !== "undefined" ? obj.cobertura_nombre : "");
  const [alcance_tipo, setAlcance_tipo] = useState(typeof obj !== "undefined" ? obj.alcance_tipo : "");
  const [alcance_id, setAlcance_id] = useState(typeof obj !== "undefined" ? obj.alcance_id : "");
  const [alcance_nombre, setAlcance_nombre] = useState(typeof obj !== "undefined" ? obj.alcance_nombre : "");
  const [valor, setValor] = useState(typeof obj !== "undefined" ? obj.valor : "");
  const [total_cabezas, setTotal_cabezas] = useState(typeof obj !== "undefined" ? obj.total_cabezas : "");

  const setFechaHandler = (Date) => {
    setFecha(Date);
  };

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "sector_id":
        setSector_id(e.target.value);
        break;
      case "sector_nombre":
        setSector_nombre(e.target.value);
        break;
      case "variable_id":
        setVariable_id(e.target.value);
        break;
      case "actividad_producto_nombre":
        setActividad_producto_nombre(e.target.value);
        break;
      case "indicador":
        setIndicador(e.target.value);
        break;
      case "unidad_de_medida":
        setUnidad_de_medida(e.target.value);
        break;
      case "fuerte":
        setFuerte(e.target.value);
        break;
      case "frecuencia_nombre":
        setfrecuencia_nombre(e.target.value);
        break;
      case "cobertura_nombre":
        setCobertura_nombre(e.target.value);
        break;
      case "alcance_tipo":
        setAlcance_tipo(e.target.value);
        break;
      case "alcance_id":
        setAlcance_id(e.target.value);
        break;
      case "alcance_nombre":
        setAlcance_nombre(e.target.value);
        break;
      case "valor":
        setValor(e.target.value);
        break;
      case "total_cabezas":
        setTotal_cabezas(e.target.value);
        break;
      default:
        break;
    }
  };

  const savetobd = (e) => {
    e.preventDefault();
    let fecha = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    props.saveToDb("stockBovinoPorcino", {
      fecha,
      sector_id,
      sector_nombre,
      variable_id,
      actividad_producto_nombre,
      indicador,
      unidad_de_medida,
      fuerte,
      frecuencia_nombre,
      cobertura_nombre,
      alcance_tipo,
      alcance_id,
      alcance_nombre,
      valor,
      total_cabezas,
    });
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">Stock Bovino/Porcino</span>
      <form onSubmit={savetobd}>
        <div className="divContaninerCenter">
          <p className="textinput">Fecha:</p>
          <DatePicker
            className="divContaniner"
            dateFormat="dd/MM/yyyy"
            selected={date}
            name="fecha"
            onChange={(Date) => setFechaHandler(Date)}
          />
        </div>
        <div className="divExterno">
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">sector id</p>
              <input
                placeholder="sector id"
                type="text"
                value={sector_id}
                name="sector_id"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">sector nombre</p>
              <select
                value={sector_nombre}
                name="sector_nombre"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="Cárnica - Vacuna">Cárnica - Vacuna</option>
                <option value="Cárnica - Porcina">Cárnica - Porcina</option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">variable id</p>
              <input
                placeholder="variable id"
                type="text"
                value={variable_id}
                name="variable_id"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">actividad producto nombre</p>
              <select
                value={actividad_producto_nombre}
                name="actividad_producto_nombre"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="Bovino">Bovino</option>
                <option value="Porcino">Porcino</option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">Indicador</p>
              <select
                value={indicador}
                name="indicador"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="Stock">Stock</option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">unidad de medida</p>
              <select
                value={unidad_de_medida}
                name="unidad_de_medida"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="cabezas">cabezas</option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">fuerte</p>
              <select
                value={fuerte}
                name="fuerte"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="SENASA">SENASA</option>
              </select>
            </div>
          </div>
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">frecuencia nombre</p>
              <select
                value={frecuencia_nombre}
                name="frecuencia_nombre"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="Anual">Anual</option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">cobertura nombre</p>
              <select
                value={cobertura_nombre}
                name="cobertura_nombre"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="Nacional">Nacional</option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">alcance tipo</p>
              <select
                value={alcance_tipo}
                name="alcance_tipo"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="PROVINCIA">PROVINCIA</option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">alcance id</p>
              <input
                placeholder="alcance id"
                type="text"
                value={alcance_id}
                name="alcance_id"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">alcance nombre</p>
              <select
                value={alcance_nombre}
                name="alcance_nombre"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>Seleccione una opcion</option>
                <option value="CHACO">CHACO</option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">valor</p>
              <input
                placeholder="valor"
                type="text"
                value={valor}
                name="valor"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">Total Cabezas</p>
              <input
                placeholder="Total Cabezas"
                type="text"
                value={total_cabezas}
                name="total_cabezas"
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
export default StockBovinoPorcino;

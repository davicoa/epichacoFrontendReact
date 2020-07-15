import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const IndicadoresLaborales = (props) => {
  const obj = props.obj;
  const [fecha, setFecha] = useState(new Date());
  const [n_trimestre, setN_trimestre] = useState(
    typeof obj !== "undefined" ? obj.n_trimestre : ""
  );
  const [trimestre, setTrimestre] = useState(
    typeof obj !== "undefined" ? obj.trimestre : ""
  );
  const [tasa, setTasa] = useState(typeof obj !== "undefined" ? obj.tasa : "");
  const [gran_resistencia, setGran_resistencia] = useState(
    typeof obj !== "undefined" ? obj.gran_resistencia : ""
  );
  const [
    var_porcent_trimestral_gran_resistencia,
    setVar_porcent_trimestral_gran_resistencia,
  ] = useState(
    typeof obj !== "undefined"
      ? obj.var_porcent_trimestral_gran_resistencia
      : ""
  );
  const [
    var_porcent_ia_gran_resistencia,
    setVar_porcent_ia_gran_resistencia,
  ] = useState(
    typeof obj !== "undefined" ? obj.var_porcent_ia_gran_resistencia : ""
  );
  const [nea, setNea] = useState(typeof obj !== "undefined" ? obj.nea : "");
  const [var_porcent_trimestral_nea, setVar_porcent_trimestral_nea] = useState(
    typeof obj !== "undefined" ? obj.var_porcent_trimestral_nea : ""
  );
  const [var_porcent_ia_nea, setVar_porcent_ia_nea] = useState(
    typeof obj !== "undefined" ? obj.var_porcent_ia_nea : ""
  );
  const [total_31_aglomerados, setTotal_31_aglomerados] = useState(
    typeof obj !== "undefined" ? obj.total_31_aglomerados : ""
  );
  const [
    var_porcent_trimestral_total,
    setVar_porcent_trimestral_total,
  ] = useState(
    typeof obj !== "undefined" ? obj.var_porcent_trimestral_total : ""
  );
  const [var_porcent_ia_total, setVar_porcent_ia_total] = useState(
    typeof obj !== "undefined" ? obj.var_porcent_ia_total : ""
  );

  const setFechaHandler = (Date) => {
    setFecha(Date);
  };

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "n_trimestre":
        setN_trimestre(e.target.value);
        break;
      case "trimestre":
        setTrimestre(e.target.value);
        break;
      case "tasa":
        setTasa(e.target.value);
        break;
      case "gran_resistencia":
        setGran_resistencia(e.target.value);
        break;
      case "var_porcent_trimestral_gran_resistencia":
        setVar_porcent_trimestral_gran_resistencia(e.target.value);
        break;
      case "var_porcent_ia_gran_resistencia":
        setVar_porcent_ia_gran_resistencia(e.target.value);
        break;
      case "nea":
        setNea(e.target.value);
        break;
      case "var_porcent_trimestral_nea":
        setVar_porcent_trimestral_nea(e.target.value);
        break;
      case "var_porcent_ia_nea":
        setVar_porcent_ia_nea(e.target.value);
        break;
      case "total_31_aglomerados":
        setTotal_31_aglomerados(e.target.value);
        break;
      case "var_porcent_trimestral_total":
        setVar_porcent_trimestral_total(e.target.value);
        break;
      case "var_porcent_ia_total":
        setVar_porcent_ia_total(e.target.value);
        break;
      default:
        break;
    }
  };

  const savetobd = (e) => {
    e.preventDefault();
    props.saveToDb("indicadoresLaborales", {
      fecha,
      n_trimestre,
      trimestre,
      tasa,
      gran_resistencia,
      var_porcent_trimestral_gran_resistencia,
      var_porcent_ia_gran_resistencia,
      nea,
      var_porcent_trimestral_nea,
      var_porcent_ia_nea,
      total_31_aglomerados,
      var_porcent_trimestral_total,
      var_porcent_ia_total,
    });
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">Indicadores Laborales</span>

      <form onSubmit={savetobd}>
        <div className="divExterno">
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">Fecha:</p>
              <DatePicker
                className="divContaniner"
                dateFormat="dd/MM/yyyy"
                selected={fecha}
                name="fecha"
                onChange={(Date) => setFechaHandler(Date)}
              />
            </div>

            <div className="divContaniner">
              <p className="textinput">n_trimestre</p>
              <input
                placeholder="n_trimestre"
                type="text"
                value={n_trimestre}
                name="n_trimestre"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">trimestre</p>
              <input
                placeholder="trimestre"
                type="text"
                value={trimestre}
                name="trimestre"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">tasa</p>
              <select
                value={tasa}
                name="tasa"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>
                  Seleccione una opcion
                </option>
                <option value="Tasa de Actividad">Tasa de Actividad</option>
                <option value="Tasa de Empleo">Tasa de Empleo</option>
                <option value="Tasa de Desocupación">
                  Tasa de Desocupación
                </option>
                <option value="Tasa de Subocupación">
                  Tasa de Subocupación
                </option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">gran_resistencia</p>
              <input
                placeholder="gran_resistencia"
                type="text"
                value={gran_resistencia}
                name="gran_resistencia"
                onChange={setImputHandler}
              />
            </div>

            <div className="divContaniner">
              <p className="textinput">
                var_porcent_trimestral_gran_resistencia
              </p>
              <input
                placeholder="var_porcent_trimestral_gran_resistencia"
                type="text"
                value={var_porcent_trimestral_gran_resistencia}
                name="var_porcent_trimestral_gran_resistencia"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_porcent_ia_gran_resistencia</p>
              <input
                placeholder="var_porcent_ia_gran_resistencia"
                type="text"
                value={var_porcent_ia_gran_resistencia}
                name="var_porcent_ia_gran_resistencia"
                onChange={setImputHandler}
              />
            </div>
          </div>
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">nea</p>
              <input
                placeholder="nea"
                type="text"
                value={nea}
                name="nea"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_porcent_trimestral_nea</p>
              <input
                placeholder="var_porcent_trimestral_nea"
                type="text"
                value={var_porcent_trimestral_nea}
                name="var_porcent_trimestral_nea"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_porcent_ia_nea</p>
              <input
                placeholder="var_porcent_ia_nea"
                type="text"
                value={var_porcent_ia_nea}
                name="var_porcent_ia_nea"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">total_31_aglomerados</p>
              <input
                placeholder="total_31_aglomerados"
                type="text"
                value={total_31_aglomerados}
                name="total_31_aglomerados"
                onChange={setImputHandler}
              />
            </div>

            <div className="divContaniner">
              <p className="textinput">var_porcent_trimestral_total</p>
              <input
                placeholder="var_porcent_trimestral_total"
                type="text"
                value={var_porcent_trimestral_total}
                name="var_porcent_trimestral_total"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_porcent_ia_total</p>
              <input
                placeholder="var_porcent_ia_total"
                type="text"
                value={var_porcent_ia_total}
                name="var_porcent_ia_total"
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
export default IndicadoresLaborales;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Cemento = (props) => {
  const obj = props.obj;
  const [fecha, setFecha] = useState(new Date());
  const [semestre, setSemestre] = useState(
    typeof obj !== "undefined" ? obj.semestre : ""
  );
  const [tasa, setTasa] = useState(typeof obj !== "undefined" ? obj.tasa : "");
  const [alcance, setAlcance] = useState(
    typeof obj !== "undefined" ? obj.alcance : ""
  );
  const [gran_resistencia, setGran_resistencia] = useState(
    typeof obj !== "undefined" ? obj.gran_resistencia : ""
  );
  const [
    var_pp_semestral_gran_resistencia,
    setVar_pp_semestral_gran_resistencia,
  ] = useState(
    typeof obj !== "undefined" ? obj.var_pp_semestral_gran_resistencia : ""
  );
  const [var_pp_ia_gran_resistencia, setVar_pp_ia_gran_resistencia] = useState(
    typeof obj !== "undefined" ? obj.var_pp_ia_gran_resistencia : ""
  );

  const setFechaHandler = (Date) => {
    setFecha(Date);
  };

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "semestre":
        setSemestre(e.target.value);
        break;
      case "alcance":
        setAlcance(e.target.value);
        break;
      case "tasa":
        setTasa(e.target.value);
        break;
      case "gran_resistencia":
        setGran_resistencia(e.target.value);
        break;
      case "var_pp_semestral_gran_resistencia":
        setVar_pp_semestral_gran_resistencia(e.target.value);
        break;
      case "var_pp_ia_gran_resistencia":
        setVar_pp_ia_gran_resistencia(e.target.value);
        break;
      default:
        break;
    }
  };

  const savetobd = (e) => {
    e.preventDefault();
    props.saveToDb("pobrezaIndigencia", {
      fecha,
      semestre,
      tasa,
      alcance,
      gran_resistencia,
      var_pp_semestral_gran_resistencia,
      var_pp_ia_gran_resistencia,
    });
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">Pobreza Indigencia</span>

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
              <p className="textinput">semestre</p>
              <input
                placeholder="semestre"
                type="text"
                value={semestre}
                name="semestre"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">alcance</p>
              <select
                value={alcance}
                name="alcance"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>
                  Seleccione una opcion
                </option>
                <option value="Gran Resistencia">Gran Resistencia</option>
                <option value="NEA">NEA</option>
                <option value="Total 31 Aglomerados">
                  Total 31 Aglomerados
                </option>
              </select>
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
                <option value="Pobreza">Pobreza</option>
                <option value="Indigencia">Indigencia</option>
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
              <p className="textinput">var_pp_semestral_gran_resistencia</p>
              <input
                placeholder="var_pp_semestral_gran_resistencia"
                type="text"
                value={var_pp_semestral_gran_resistencia}
                name="var_pp_semestral_gran_resistencia"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_pp_ia_gran_resistencia</p>
              <input
                placeholder="var_pp_ia_gran_resistencia"
                type="text"
                value={var_pp_ia_gran_resistencia}
                name="var_pp_ia_gran_resistencia"
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
export default Cemento;

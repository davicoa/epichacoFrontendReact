import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../style.css";

const EmpleoGeneral = (props) => {
  const obj = props.obj;
  const [fecha, setFecha] = useState(new Date());
  const [rama_de_actividad, setRama_de_actividad] = useState(
    typeof obj !== "undefined" ? obj.rama_de_actividad : ""
  );
  const [empleo_provincia, setEmpleo_provincia] = useState(
    typeof obj !== "undefined" ? obj.empleo_provincia : ""
  );
  const [variacion_ia_provincia, setVariacion_ia_provincia] = useState(
    typeof obj !== "undefined" ? obj.variacion_ia_provincia : ""
  );
  const [salario_nominal, setSalario_nominal] = useState(
    typeof obj !== "undefined" ? obj.salario_nominal : ""
  );
  const [var_ia_salario_nominal, setVar_ia_salario_nominal] = useState(
    typeof obj !== "undefined" ? obj.var_ia_salario_nominal : ""
  );
  const [salario_real_base_dic_19, setSalario_real_base_dic_19] = useState(
    typeof obj !== "undefined" ? obj.salario_real_base_dic_19 : ""
  );
  const [var_ia_salario_real, setVar_ia_salario_real] = useState(
    typeof obj !== "undefined" ? obj.var_ia_salario_real : ""
  );
  const [empresas, setEmpresas] = useState(
    typeof obj !== "undefined" ? obj.empresas : ""
  );
  const [var_ia_empresas, setVar_i_a_empresas] = useState(
    typeof obj !== "undefined" ? obj.var_ia_empresas : ""
  );
  const [empleo_nacion, setEmpleo_nacion] = useState(
    typeof obj !== "undefined" ? obj.empleo_nacion : ""
  );
  const [var_ia_empleo_nacion, setVar_ia_empleo_nacion] = useState(
    typeof obj !== "undefined" ? obj.var_ia_empleo_nacion : ""
  );
  const [empleado_promedio, setEmpleado_promedio] = useState(
    typeof obj !== "undefined" ? obj.empleado_promedio : ""
  );
  const [var_ia_empleado_promedio, setVar_ia_empleado_promedio] = useState(
    typeof obj !== "undefined" ? obj.var_ia_empleado_promedio : ""
  );
  const [indice_empleo_provincia, setIndice_empleo_provincia] = useState(
    typeof obj !== "undefined" ? obj.indice_empleo_provincia : ""
  );
  const [
    var_porcen_mensual_empleo_provincia,
    setVar_porcen_mensual_empleo_provincia,
  ] = useState(
    typeof obj !== "undefined" ? obj.var_porcen_mensual_empleo_provincia : ""
  );
  const [indice_empleo_nacion, setIndice_empleo_nacion] = useState(
    typeof obj !== "undefined" ? obj.indice_empleo_nacion : ""
  );
  const [
    var_porcen_mensual_empleo_naciòn,
    setVar_porcen_mensual_empleo_naciòn,
  ] = useState(
    typeof obj !== "undefined" ? obj.var_porcen_mensual_empleo_naciòn : ""
  );

  const setFechaHandler = (Date) => {
    setFecha(Date);
  };

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "rama_de_actividad":
        setRama_de_actividad(e.target.value);
        break;
      case "empleo_provincia":
        setEmpleo_provincia(e.target.value);
        break;
      case "variacion_ia_provincia":
        setVariacion_ia_provincia(e.target.value);
        break;
      case "salario_nominal":
        setSalario_nominal(e.target.value);
        break;
      case "var_ia_salario_nominal":
        setVar_ia_salario_nominal(e.target.value);
        break;
      case "salario_real_base_dic_19":
        setSalario_real_base_dic_19(e.target.value);
        break;
      case "var_ia_salario_real":
        setVar_ia_salario_real(e.target.value);
        break;
      case "empresas":
        setEmpresas(e.target.value);
        break;
      case "var_ia_empresas":
        setVar_i_a_empresas(e.target.value);
        break;
      case "empleo_nacion":
        setEmpleo_nacion(e.target.value);
        break;
      case "var_ia_empleo_nacion":
        setVar_ia_empleo_nacion(e.target.value);
        break;
      case "empleado_promedio":
        setEmpleado_promedio(e.target.value);
        break;
      case "var_ia_empleado_promedio":
        setVar_ia_empleado_promedio(e.target.value);
        break;
      case "indice_empleo_provincia":
        setIndice_empleo_provincia(e.target.value);
        break;
      case "var_porcen_mensual_empleo_provincia":
        setVar_porcen_mensual_empleo_provincia(e.target.value);
        break;
      case "indice_empleo_nacion":
        setIndice_empleo_nacion(e.target.value);
        break;
      case "var_porcen_mensual_empleo_naciòn":
        setVar_porcen_mensual_empleo_naciòn(e.target.value);
        break;
      default:
        break;
    }
  };

  const savetobd = (e) => {
    e.preventDefault();
    props.saveToDb("empleoGeneral", {
      fecha,
      rama_de_actividad,
      empleo_provincia,
      variacion_ia_provincia,
      salario_nominal,
      var_ia_salario_nominal,
      salario_real_base_dic_19,
      var_ia_salario_real,
      empresas,
      var_ia_empresas,
      empleo_nacion,
      var_ia_empleo_nacion,
      empleado_promedio,
      var_ia_empleado_promedio,
      indice_empleo_provincia,
      var_porcen_mensual_empleo_provincia,
      indice_empleo_nacion,
      var_porcen_mensual_empleo_naciòn,
    });
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">Empleo General</span>
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
              <p className="textinput">rama_de_actividad</p>
              <select
                value={rama_de_actividad}
                name="rama_de_actividad"
                onChange={setImputHandler}
                required
              >
                <option value="" disabled>
                  Seleccione una opcion
                </option>
                <option value="Total">Total</option>
                <option value="Agricultura, ganadería, caza y silvicultura">
                  Agricultura, ganadería, caza y silvicultura
                </option>
                <option value="Explotación de minas y canteras">
                  Explotación de minas y canteras
                </option>
                <option value="Industria manufacturera">
                  Industria manufacturera
                </option>
                <option value="Electricidad, gas y agua">
                  Electricidad, gas y agua
                </option>
                <option value="Construcción">Construcción</option>
                <option value="Comercio al por mayor y al por menor">
                  Comercio al por mayor y al por menor
                </option>
                <option value="Hotelería y restaurantes">
                  Hotelería y restaurantes
                </option>
                <option value="Servicios de transporte, de almacenamiento y de comunicaciones">
                  Servicios de transporte, de almacenamiento y de comunicaciones
                </option>
                <option value="Intermediación financiera y otros servicios financieros">
                  Intermediación financiera y otros servicios financieros
                </option>
                <option value="Servicios inmobiliarios, empresariales y de alquiler">
                  Servicios inmobiliarios, empresariales y de alquiler
                </option>
                <option value="Enseñanza">Enseñanza</option>
                <option value="Servicios sociales y de salud">
                  Servicios sociales y de salud
                </option>
                <option value="Servicios comunitarios, sociales y personales N.C.P.">
                  Servicios comunitarios, sociales y personales N.C.P.
                </option>
              </select>
            </div>
            <div className="divContaniner">
              <p className="textinput">empleo_provincia</p>
              <input
                placeholder="empleo_provincia"
                type="text"
                value={empleo_provincia}
                name="empleo_provincia"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">variacion_ia_provincia</p>
              <input
                placeholder="variacion_ia_provincia"
                type="text"
                value={variacion_ia_provincia}
                name="variacion_ia_provincia"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">salario_nominal</p>
              <input
                placeholder="salario_nominal"
                type="text"
                value={salario_nominal}
                name="salario_nominal"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_ia_salario_nominal</p>
              <input
                placeholder="var_ia_salario_nominal"
                type="text"
                value={var_ia_salario_nominal}
                name="var_ia_salario_nominal"
                onChange={setImputHandler}
              />
            </div>
          </div>
          <div className="divInterno">
            <div className="divContaniner">
              <p className="textinput">salario_real_base_dic_19</p>
              <input
                placeholder="salario_real_base_dic_19"
                type="text"
                value={salario_real_base_dic_19}
                name="salario_real_base_dic_19"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_ia_salario_real</p>
              <input
                placeholder="var_ia_salario_real"
                type="text"
                value={var_ia_salario_real}
                name="var_ia_salario_real"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">empresas</p>
              <input
                placeholder="empresas"
                type="text"
                value={empresas}
                name="empresas"
                onChange={setImputHandler}
              />
            </div>

            <div className="divContaniner">
              <p className="textinput">var_ia_empresas</p>
              <input
                placeholder="var_ia_empresas"
                type="text"
                value={var_ia_empresas}
                name="var_ia_empresas"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">empleo_nacion</p>
              <input
                placeholder="empleo_nacion"
                type="text"
                value={empleo_nacion}
                name="empleo_nacion"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_ia_empleo_nacion</p>
              <input
                placeholder="var_ia_empleo_nacion"
                type="text"
                value={var_ia_empleo_nacion}
                name="var_ia_empleo_nacion"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">empleado_promedio</p>
              <input
                placeholder="empleado_promedio"
                type="text"
                value={empleado_promedio}
                name="empleado_promedio"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_ia_empleado_promedio</p>
              <input
                placeholder="var_ia_empleado_promedio"
                type="text"
                value={var_ia_empleado_promedio}
                name="var_ia_empleado_promedio"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">indice_empleo_provincia</p>
              <input
                placeholder="indice_empleo_provincia"
                type="text"
                value={indice_empleo_provincia}
                name="indice_empleo_provincia"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">indice_empleo_nacion</p>
              <input
                placeholder="indice_empleo_nacion"
                type="text"
                value={indice_empleo_nacion}
                name="indice_empleo_nacion"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_porcen_mensual_empleo_provincia</p>
              <input
                placeholder="var_porcen_mensual_empleo_provincia"
                type="text"
                value={var_porcen_mensual_empleo_provincia}
                name="var_porcen_mensual_empleo_provincia"
                onChange={setImputHandler}
              />
            </div>
            <div className="divContaniner">
              <p className="textinput">var_porcen_mensual_empleo_naciòn</p>
              <input
                placeholder="var_porcen_mensual_empleo_naciòn"
                type="text"
                value={var_porcen_mensual_empleo_naciòn}
                name="var_porcen_mensual_empleo_naciòn"
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
export default EmpleoGeneral;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ClipLoader from "react-spinners/ClipLoader";
import "react-datepicker/dist/react-datepicker.css";

const IPCGResis = (props) => {
  const obj = props.obj;
  const [fecha, setFecha] = useState(new Date());
  const [sector, setSector] = useState(typeof obj !== "undefined" ? obj.sector : "");
  const [ipc, setIpc] = useState(typeof obj !== "undefined" ? obj.ipc : "");
  const [var_mensual, setVar_mensual] = useState(typeof obj !== "undefined" ? obj.var_mensual : "");
  const [var_ia, setVar_ia] = useState(typeof obj !== "undefined" ? obj.var_ia : "");

  const setFechaHandler = (Date) => {
    setFecha(Date);
  };

  const setImputHandler = (e) => {
    switch (e.target.name) {
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
    props.saveToDb("ipcgrResis", {
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
          color={"#123abc"}
          a
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
              onChange={(Date) => setFechaHandler(Date)}
            />
          </div>
          <div className="divExterno">
            <div className="divInterno">
              <div className="divContaniner">
                <p className="textinput">Sector</p>
                <select
                  value={sector}
                  name="sector"
                  onChange={setImputHandler}
                  required
                >
                  <option value="Nivel General">Nivel General</option>
                  <option value="" disabled>Seleccione una opcion</option>
                  <option value="Alimentos y Bebidas">Alimentos y Bebidas</option>
                  <option value="Productos de panificación, cerreales y pastas">Productos de panificación, cerreales y pastas</option>
                  <option value="Carnes">Carnes</option>
                  <option value="Aceites y Grasas">Aceites y Grasas</option>
                  <option value="Productos lácteos y huevos">Productos lácteos y huevos</option>
                  <option value="Verduras">Verduras</option>
                  <option value="Azúcar y dulces">Azúcar y dulces</option>
                  <option value="Condimentos y otros prods.alimenticios">Condimentos y otros prods.alimenticios</option>
                  <option value="Comidas listas para llevar">Comidas listas para llevar</option>
                  <option value="Bebidas no alcohólicas">Bebidas no alcohólicas</option>
                  <option value="Bebidas alcohólicas">Bebidas alcohólicas</option>
                  <option value="Infusiones">Infusiones</option>
                  <option value="Almuerzo y cena">Almuerzo y cena</option>
                  <option value="Indumentaria y Calzado">Indumentaria y Calzado</option>
                  <option value="Ropa Interior">Ropa Interior</option>
                  <option value="Ropa Exterior">Ropa Exterior</option>
                  <option value="Calzado de vestir">Calzado de vestir</option>
                  <option value="Calzado deportivo y otros">Calzado deportivo y otros</option>
                  <option value="Telas hilados y artículos de mercería">Telas hilados y artículos de mercería</option>
                  <option value="Accesorios para vestir">Accesorios para vestir</option>
                  <option value="Confección y reparación de la indumentaria">Confección y reparación de la indumentaria</option>
                  <option value="Propiedad, Combustible, Agua y Electricidad">Propiedad, Combustible, Agua y Electricidad</option>
                  <option value="Alquiler de la vivienda">Alquiler de la vivienda</option>
                  <option value="Combustibles para la vivienda">Combustibles para la vivienda</option>
                  <option value="Electricidad">Electricidad</option>
                  <option value="Agua y Servicios Sanitarios">Agua y Servicios Sanitarios</option>
                  <option value="Reparaciones y Gastos comunes de la Viv.">EleReparaciones y Gastos comunes de la Viv.ctricidad</option>
                  <option value="Equipamiento y Mantenimiento del Hogar">Equipamiento y Mantenimiento del Hogar</option>
                  <option value="Equipamiento y Mantenimiento del Hogar">Equipamiento y Mantenimiento del Hogar</option>
                  <option value="Artefactos para el Hogar">Artefactos para el Hogar</option>
                  <option value="Textiles para el Hogar">Textiles para el Hogar</option>
                  <option value="Bateria de cocina, cubiertos, otros">Bateria de cocina, cubiertos, otros</option>
                  <option value="Productos y Utensillos de Limpieza">Productos y Utensillos de Limpieza</option>
                  <option value="Herramientas y arts.pa/manten.hogar">Herramientas y arts.pa/manten.hogar</option>
                  <option value="Servicios para el Hogar">Servicios para el Hogar</option>
                  <option value="Atención de la Salud">Atención de la Salud</option>
                  <option value="Productos medicinales">Productos medicinales</option>
                  <option value="Elementos para primeros auxilios, ap. y acc.">Elementos para primeros auxilios, ap. y acc.</option>
                  <option value="Consultas médicas">Consultas médicas</option>
                  <option value="Sistemas de salud y serv.auxiliares">Sistemas de salud y serv.auxiliares</option>
                  <option value="Transporte y Comunicaciones">Transporte y Comunicaciones</option>
                  <option value="Transporte público de pasajeros">Transporte público de pasajeros</option>
                  <option value="Adquisición de vehículos">Adquisición de vehículos</option>
                  <option value="Funcionamiento y mant.de los vehículos">Funcionamiento y mant.de los vehículos</option>
                  <option value="Teléfono">Teléfono</option>
                  <option value="Esparcimiento y Cultura">Esparcimiento y Cultura</option>
                  <option value="Transporte por Turismo">Transporte por Turismo</option>
                  <option value="Alojamiento y excursiones">Alojamiento y excursiones</option>
                  <option value="Equipos de audio, T.V. y computación">Equipos de audio, T.V. y computación</option>
                  <option value="Elementos p/audio, T.V. video y computación">Elementos p/audio, T.V. video y computación</option>
                  <option value="Serv.p/audio y T.V.">Serv.p/audio y T.V.</option>
                  <option value="Diarios y periódicos">Diarios y periódicos</option>
                  <option value="Juguetes y juegos">Juguetes y juegos</option>
                  <option value="Artículos para deportes">Artículos para deportes</option>
                  <option value="flores, plantas y alimentos animales dom.">flores, plantas y alimentos animales dom.</option>
                  <option value="Cines, teatros y otros espectáculos">Cines, teatros y otros espectáculos</option>
                  <option value="Enseñanza">Enseñanza</option>
                  <option value="Educacion no  formal">Educacion no  formal</option>
                  <option value="Artículos de librería">Artículos de librería</option>
                  <option value="Bienes y Servicios varios">Bienes y Servicios varios</option>
                  <option value="Cigarrillos y accesorios">Cigarrillos y accesorios</option>
                  <option value="Artículos de tocador y belleza">Artículos de tocador y belleza</option>
                  <option value="Servicios para el cuidado persona">Servicios para el cuidado persona</option>
                  <option value="Servicios diversos">Servicios diversos</option>
                </select>
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
    </div>
  );
};

export default IPCGResis;

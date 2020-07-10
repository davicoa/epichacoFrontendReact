import React, { useState } from "react"
import DatePicker from "react-datepicker"
import ClipLoader from "react-spinners/ClipLoader"
import "react-datepicker/dist/react-datepicker.css"

const Vehiculo = props => {

     const [fecha, setFecha] = useState(new Date())
     const [categoria, setCategoria] = useState("")
     const [chaco_original, setChaco_original] = useState("")
     const [var_mens_chaco_original, setVar_mens_chaco_original] = useState("")
     const [var_ia_chaco_original, setVar_ia_chaco_original] = useState("")
     const [chaco_deses, setChaco_deses] = useState("")
     const [var_mens_chaco_deses, setVar_mens_chaco_deses] = useState("")
     const [var_ia_chaco_deses, setVar_ia_chaco_deses] = useState("")
     const [nacion_original, setNacion_original] = useState("")
     const [var_mens_nacion_original, setVar_mens_nacion_original] = useState("")
     const [var_ia_nacion_original, setVar_ia_nacion_original] = useState("")
     const [nacion_deses, setNacion_deses] = useState("")
     const [var_mens_nacion_deses, setVar_mens_nacion_deses] = useState("")
     const [var_ia_nacion_deses, setVar_ia_nacion_deses] = useState("")

     const setFechaHandler = Date => {
          setFecha(Date);
     }

     const setImputHandler = (e) => {
          switch (e.target.name) {
               case "categoria":
                    setCategoria(e.target.value);
                    break;
               case "chaco_original":
                    setChaco_original(e.target.value);
                    break;
               case "var_mens_chaco_original":
                    setVar_mens_chaco_original(e.target.value);
                    break;
               case "var_ia_chaco_original":
                    setVar_ia_chaco_original(e.target.value);
                    break;
               case "chaco_deses":
                    setChaco_deses(e.target.value);
                    break;
               case "var_mens_chaco_deses":
                    setVar_mens_chaco_deses(e.target.value);
                    break;
               case "var_ia_chaco_deses":
                    setVar_ia_chaco_deses(e.target.value);
                    break;
               case "nacion_original":
                    setNacion_original(e.target.value);
                    break;
               case "var_mens_nacion_original":
                    setVar_mens_nacion_original(e.target.value);
                    break;
               case "var_ia_nacion_original":
                    setVar_ia_nacion_original(e.target.value);
                    break;
               case "nacion_deses":
                    setNacion_deses(e.target.value);
                    break;
               case "var_mens_nacion_deses":
                    setVar_mens_nacion_deses(e.target.value);
                    break;
               case "var_ia_nacion_deses":
                    setVar_ia_nacion_deses(e.target.value);
                    break;
               default:
                    break;
          }
     };

     const savetobd = (e) => {
          e.preventDefault();
          props.saveToDb("vehiculo", {
               fecha,
               categoria,
               chaco_original,
               var_mens_chaco_original,
               var_ia_chaco_original,
               chaco_deses,
               var_mens_chaco_deses,
               var_ia_chaco_deses,
               nacion_original,
               var_mens_nacion_original,
               var_ia_nacion_original,
               nacion_deses,
               var_mens_nacion_deses,
               var_ia_nacion_deses,
          });
     }

     return (
          <div className="formContainer">
               <span className="tituloDatoACargar">Vehículo</span>
               {props.loading ? (
                    <ClipLoader
                         css={("display: block", "margin: 0 auto", "border-color: blue")}
                         size={150}
                         color={"#123abc"}
                         loading={props.loading}
                    />
               ) : (
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
                                                  onChange={Date => setFechaHandler(Date)}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">categoria</p>
                                             <input
                                                  placeholder="categoria"
                                                  type="text"
                                                  value={categoria}
                                                  name="categoria"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">chaco_original</p>
                                             <input
                                                  placeholder="chaco_original"
                                                  type="text"
                                                  value={chaco_original}
                                                  name="chaco_original"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_mens_chaco_original</p>
                                             <input
                                                  placeholder="var_mens_chaco_original"
                                                  type="text"
                                                  value={var_mens_chaco_original}
                                                  name="var_mens_chaco_original"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_ia_chaco_original</p>
                                             <input
                                                  placeholder="var_ia_chaco_original"
                                                  type="text"
                                                  value={var_ia_chaco_original}
                                                  name="var_ia_chaco_original"
                                                  onChange={setImputHandler}
                                             />
                                        </div>

                                        <div className="divContaniner">
                                             <p className="textinput">chaco_deses</p>
                                             <input
                                                  placeholder="chaco_deses"
                                                  type="text"
                                                  value={chaco_deses}
                                                  name="chaco_deses"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_mens_chaco_deses</p>
                                             <input
                                                  placeholder="var_ia_c_e_chaco"
                                                  type="text"
                                                  value={var_mens_chaco_deses}
                                                  name="var_mens_chaco_deses"
                                                  onChange={setImputHandler}
                                             />
                                        </div>

                                   </div>
                                   <div className="divInterno">
                                        <div className="divContaniner">
                                             <p className="textinput">var_ia_chaco_deses</p>
                                             <input
                                                  placeholder="var_ia_chaco_deses"
                                                  type="text"
                                                  value={var_ia_chaco_deses}
                                                  name="var_ia_chaco_deses"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">nacion_original</p>
                                             <input
                                                  placeholder="nacion_original"
                                                  type="text"
                                                  value={nacion_original}
                                                  name="nacion_original"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_mens_nacion_original</p>
                                             <input
                                                  placeholder="var_mens_nacion_original"
                                                  type="text"
                                                  value={var_mens_nacion_original}
                                                  name="var_mens_nacion_original"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_ia_nacion_original</p>
                                             <input
                                                  placeholder="var_ia_nacion_original"
                                                  type="text"
                                                  value={var_ia_nacion_original}
                                                  name="var_ia_nacion_original"
                                                  onChange={setImputHandler}
                                             />
                                        </div>

                                        <div className="divContaniner">
                                             <p className="textinput">nacion_deses</p>
                                             <input
                                                  placeholder="nacion_deses"
                                                  type="text"
                                                  value={nacion_deses}
                                                  name="nacion_deses"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_mens_nacion_deses</p>
                                             <input
                                                  placeholder="var_mens_nacion_deses"
                                                  type="text"
                                                  value={var_mens_nacion_deses}
                                                  name="var_mens_nacion_deses"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_ia_nacion_deses</p>
                                             <input
                                                  placeholder="var_ia_nacion_deses"
                                                  type="text"
                                                  value={var_ia_nacion_deses}
                                                  name="var_ia_nacion_deses"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="divContaninerCenter">
                                   <button
                                        className="botton"
                                        type="submit"
                                   >
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
     )
}

export default Vehiculo
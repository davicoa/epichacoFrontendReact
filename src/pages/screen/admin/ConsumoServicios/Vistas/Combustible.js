import React, { useState } from "react"
import DatePicker from "react-datepicker"
import ClipLoader from "react-spinners/ClipLoader"
import "react-datepicker/dist/react-datepicker.css"

const Combustible = props => {

     const [fecha, setFecha] = useState(new Date())
     const [producto, setProducto] = useState("")
     const [valor_sin_est_chaco, setValor_sin_est_chaco] = useState("")
     const [var_mens_chaco, setVar_mens_s_e_chaco] = useState("")
     const [var_ia_chaco, setVar_ia_s_e_chaco] = useState("")
     const [valor_con_est_chaco, setValor_con_est_chaco] = useState("")
     const [var_ia_c_e_chaco, setVar_ia_c_e_chaco] = useState("")
     const [var_mens_c_e_chaco, setVar_mens_c_e_chaco] = useState("")
     const [valor_sin_est_nacion, setValor_sin_est_nacion] = useState("")
     const [var_mens_nacion, setVar_mens_s_e_nacion] = useState("")
     const [var_ia_nacion, setVar_ia_s_e_nacion] = useState("")
     const [valor_con_est_nacion, setValor_con_est_nacion] = useState("")
     const [var_mens_c_e_nacion, setVar_mens_c_e_nacion] = useState("")
     const [var_ia_c_e_nacion, setVar_ia_c_e_nacion] = useState("")

     const setFechaHandler = Date => {
          setFecha(Date);
     }

     const setImputHandler = (e) => {
          switch (e.target.name) {
               case "producto":
                    setProducto(e.target.value);
                    break;
               case "valor_sin_est_chaco":
                    setValor_sin_est_chaco(e.target.value);
                    break;
               case "var_mens_chaco":
                    setVar_mens_s_e_chaco(e.target.value);
                    break;
               case "var_ia_chaco":
                    setVar_ia_s_e_chaco(e.target.value);
                    break;
               case "valor_sin_est_nacion":
                    setValor_sin_est_nacion(e.target.value);
                    break;
               case "var_mens_nacion":
                    setVar_mens_s_e_nacion(e.target.value);
                    break;
               case "var_ia_nacion":
                    setVar_ia_s_e_nacion(e.target.value);
                    break;
               case "valor_con_est_chaco":
                    setValor_con_est_chaco(e.target.value);
                    break;
               case "var_mens_c_e_chaco":
                    setVar_mens_c_e_chaco(e.target.value);
                    break;
               case "var_ia_c_e_chaco":
                    setVar_ia_c_e_chaco(e.target.value);
                    break;
               case "valor_con_est_nacion":
                    setValor_con_est_nacion(e.target.value);
                    break;
               case "var_mens_c_e_nacion":
                    setVar_mens_c_e_nacion(e.target.value);
                    break;
               case "var_ia_c_e_nacion":
                    setVar_ia_c_e_nacion(e.target.value);
                    break;
               default:
                    break;
          }
     };

     const savetobd = (e) => {
          e.preventDefault();
          props.saveToDb("combustible", {
               fecha,
               producto,
               valor_sin_est_chaco,
               var_mens_chaco,
               var_ia_chaco,
               valor_sin_est_nacion,
               var_mens_nacion,
               var_ia_nacion,
               valor_con_est_chaco,
               var_mens_c_e_chaco,
               var_ia_c_e_chaco,
               valor_con_est_nacion,
               var_mens_c_e_nacion,
               var_ia_c_e_nacion,
          });
     }

     return (
          <div className="formContainer">
               <span className="tituloDatoACargar">Combustible</span>
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
                                             <p className="textinput">valor_sin_est_chaco</p>
                                             <input
                                                  placeholder="valor_sin_est_chaco"
                                                  type="text"
                                                  value={valor_sin_est_chaco}
                                                  name="valor_sin_est_chaco"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_mens_chaco</p>
                                             <input
                                                  placeholder="var_mens_chaco"
                                                  type="text"
                                                  value={var_mens_chaco}
                                                  name="var_mens_chaco"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_ia_chaco</p>
                                             <input
                                                  placeholder="var_ia_chaco"
                                                  type="text"
                                                  value={var_ia_chaco}
                                                  name="var_ia_chaco"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">valor_con_est_chaco</p>
                                             <input
                                                  placeholder="valor_con_est_chaco"
                                                  type="text"
                                                  value={valor_con_est_chaco}
                                                  name="valor_con_est_chaco"
                                                  onChange={setImputHandler}
                                             />
                                        </div>

                                        <div className="divContaniner">
                                             <p className="textinput">var_mens_c_e_chaco</p>
                                             <input
                                                  placeholder="var_mens_c_e_chaco"
                                                  type="text"
                                                  value={var_mens_c_e_chaco}
                                                  name="var_mens_c_e_chaco"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_ia_c_e_chaco</p>
                                             <input
                                                  placeholder="var_ia_c_e_chaco"
                                                  type="text"
                                                  value={var_ia_c_e_chaco}
                                                  name="var_ia_c_e_chaco"
                                                  onChange={setImputHandler}
                                             />
                                        </div>

                                   </div>
                                   <div className="divInterno">
                                        <div className="divContaniner">
                                             <p className="textinput">producto</p>
                                             <input
                                                  placeholder="producto"
                                                  type="text"
                                                  value={producto}
                                                  name="producto"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">valor_sin_est_nacion</p>
                                             <input
                                                  placeholder="valor_sin_est_nacion"
                                                  type="text"
                                                  value={valor_sin_est_nacion}
                                                  name="valor_sin_est_nacion"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_mens_nacion</p>
                                             <input
                                                  placeholder="var_mens_nacion"
                                                  type="text"
                                                  value={var_mens_nacion}
                                                  name="var_mens_nacion"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_ia_nacion</p>
                                             <input
                                                  placeholder="var_ia_nacion"
                                                  type="text"
                                                  value={var_ia_nacion}
                                                  name="var_ia_nacion"
                                                  onChange={setImputHandler}
                                             />
                                        </div>

                                        <div className="divContaniner">
                                             <p className="textinput">valor_con_est_nacion</p>
                                             <input
                                                  placeholder="valor_con_est_nacion"
                                                  type="text"
                                                  value={valor_con_est_nacion}
                                                  name="valor_con_est_nacion"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_mens_c_e_nacion</p>
                                             <input
                                                  placeholder="var_mens_c_e_nacion"
                                                  type="text"
                                                  value={var_mens_c_e_nacion}
                                                  name="var_mens_c_e_nacion"
                                                  onChange={setImputHandler}
                                             />
                                        </div>
                                        <div className="divContaniner">
                                             <p className="textinput">var_ia_c_e_nacion</p>
                                             <input
                                                  placeholder="var_ia_c_e_nacion"
                                                  type="text"
                                                  value={var_ia_c_e_nacion}
                                                  name="var_ia_c_e_nacion"
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

export default Combustible
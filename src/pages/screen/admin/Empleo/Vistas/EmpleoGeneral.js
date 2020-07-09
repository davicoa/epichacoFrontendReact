import React, { useState } from "react";
import DatePicker from "react-datepicker"
import ClipLoader from "react-spinners/ClipLoader"
import "react-datepicker/dist/react-datepicker.css"
import "../../style.css"

const EmpleoGeneral = (props) => {
    const [fecha, setFecha] = useState(new Date())
    const [rama_de_actividad, setRama_de_actividad] = useState("")
    const [empleo_provincia, setEmpleo_provincia] = useState("")
    const [variacion_ia_provincia, setVariacion_ia_provincia] = useState("")
    const [salario_nominal, setSalario_nominal] = useState("")
    const [var_ia_salario_nominal, setVar_ia_salario_nominal] = useState("")
    const [salario_real_base_dic_19, setSalario_real_base_dic_19] = useState("")
    const [var_ia_salario_real, setVar_ia_salario_real] = useState("")
    const [empresas, setEmpresas] = useState("")
    const [var_ia_empresas, setVar_i_a_empresas] = useState("")
    const [empleo_nacion, setEmpleo_nacion] = useState("")
    const [var_ia_empleo_nacion, setVar_ia_empleo_nacion] = useState("")
    const [empleado_promedio, setEmpleado_promedio] = useState("")
    const [var_ia_empleado_promedio, setVar_ia_empleado_promedio] = useState("")
    const [indice_empleo_provincia, setIndice_empleo_provincia] = useState("")
    const [var_porcen_mensual_empleo_provincia, setVar_porcen_mensual_empleo_provincia] = useState("")
    const [indice_empleo_nacion, setIndice_empleo_nacion] = useState("")
    const [var_porcen_mensual_empleo_naciòn, setVar_porcen_mensual_empleo_naciòn] = useState("")

    const setImputHandler = (e) => {
        switch (e.target.name) {
            case "fecha":
                setFecha(e.target.value);
                break;
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
    }

    return (
        <div className="formContainer">
            <span className="tituloDatoACargar">Empleo General</span>
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
                                        selected={fecha}
                                        name="fecha"
                                        onChange={setImputHandler}
                                    />
                                </div>
                                <div className="divContaniner">
                                    <p className="textinput">rama_de_actividad</p>
                                    <input
                                        placeholder="rama_de_actividad"
                                        type="text"
                                        value={rama_de_actividad}
                                        name="rama_de_actividad"
                                        onChange={setImputHandler}
                                    />
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
    );
}
export default EmpleoGeneral
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style.css";
const ForestalPrimario = (props) => {
  const obj = props.obj;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRPassword] = useState('');
  const [role, setRole] = useState('');

  const savetobd = (e) => {
    e.preventDefault();
    e.target[3].setCustomValidity('');
    if (password === rpassword) {
        console.log('si'); 
    }else{
        console.log('no'); 
        e.target[3].setCustomValidity("Contraseña no coinsiden");
    }
  };

  const setImputHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "rpassword":
          setRPassword(e.target.value);
        break;
      case "role":
        setRole(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">Usuario</span>
      <form onSubmit={savetobd}>
        <div className="divContaniner">
          <p className="textinput">Nombre de Usuario</p>
          <input
            placeholder="usuario con el que se ingresa"
            type="text"
            value={username}
            name="username"
            onChange={setImputHandler}
          />
        </div>
        <div className="divContaniner">
          <p className="textinput">E-mail</p>
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            name="email"
            onChange={setImputHandler}
          />
        </div>
        <div className="divContaniner">
          <p className="textinput">Contraseña</p>
          <input
            placeholder="Contraseña"
            type="password"
            value={password}
            name="password"
            required
            onChange={setImputHandler}
          />
        </div>
        <div className="divContaniner">
          <p className="textinput">Repetir Contraseña</p>
          <input
            placeholder="Repetir Contraseña"
            type="password"
            value={rpassword}
            name="rpassword"
            required
            onChange={setImputHandler}
          />
        </div>
        <div className="divContaniner">
          <p className="textinput">Tipo de Usuario</p>
          <select value={role} name="role" onChange={setImputHandler} required>
            <option value="" disabled>
              Seleccione una opcion
            </option>
            <option value="MODERATOR">Moderador</option>
            <option value="USER">Usuario</option>
          </select>
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
export default ForestalPrimario;

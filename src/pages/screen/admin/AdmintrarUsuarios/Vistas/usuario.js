import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../style.css";

const ForestalPrimario = (props) => {
  const obj = props.obj;

  const [username, setUsername] = useState(typeof obj !== "undefined" ? obj.username : "");
  const [email, setEmail] = useState(typeof obj !== "undefined" ? obj.email : "");
  const [password, setPassword] = useState("");
  const [rpassword, setRPassword] = useState("");
  const [role, setRole] = useState(typeof obj !== "undefined" ? obj.role : "");

  const [randon, setRandon] = useState("");

  const savetobd = (e) => {
    e.preventDefault();
    if (password === rpassword) {
      props.saveToDb('auth/signup', {
        username,
        email,
        password,
        role,
      });

    } else {
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
        e.target.setCustomValidity("");
        setPassword(e.target.value);
        break;
      case "rpassword":
        e.target.setCustomValidity("");
        setRPassword(e.target.value);
        break;
      case "role":
        setRole(e.target.value);
        break;
      default:
        break;
    }
  };

  function randomPass(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log("--->", result)
    return setRandon(result);
  }

  return (
    <div className="formContainer">
      <span className="tituloDatoACargar">Usuario</span>
      <form onSubmit={savetobd}>
        <div className="divContaniner">
          <p className="textinput">Nombre de Usuario</p>
          <input
            placeholder="Nombre de Usuario"
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
          <p className="textinput"></p>
          <input
            placeholder="Randon"
            type="text"
            value={randon}
            readOnly
          />
          <button type="reset" onClick={() => randomPass(8)}>Randon</button>
        </div>
        <div className="divContaniner">
          <p className="textinput">Contraseña</p>
          <input className="contrasenia"
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
          <input className="contrasenia"
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
            <option value={['user']}>Usuario</option>
            <option value={['moderator']}>Moderador</option>
            <option value={['admin']} disabled>ADMINISTRADOR</option>
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

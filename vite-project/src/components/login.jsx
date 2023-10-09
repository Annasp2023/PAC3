import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import PerfilUsuario from "./perfil";

function Login() {
  const saludos = ["¡Hola!", "¡Bienvenid@!", "¡Te estábamos esperando!"];
  const [titulo, setTitulo] = useState(saludos[0]);
  const [tituloIndex, setTituloIndex] = useState(0);
  const [idPresupuesto, setIdPresupueto] = useState("");
  const [cliente, setCliente] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTituloIndex((prevIndex) => (prevIndex + 1) % saludos.length);
      setTitulo(saludos[(tituloIndex + 1) % saludos.length]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [tituloIndex, saludos]);

  const buscarCliente = () => {
    axios
      .get(`http://localhost:3001/buscarCliente/${idPresupuesto}`)

      .then((res) => {
        setCliente(res.data);
        console.log(idPresupuesto);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const MostrarTarjetaCliente = () => {
    if (cliente === "") {
      return;
    } else {
      return (
        <>
          <div className="clientes">
            <ul className="tarjetaClientes">
              {cliente.map((clientes) => (
                <li className="cardCliente" key={clientes._id}>
                  <img
                    src="https://pbs.twimg.com/profile_images/980145664712740864/aNWjR7MB_400x400.jpg"
                    className="imgPerfil"
                  ></img>
                  <h1>{clientes.nombre}</h1>
                  <h3>{clientes.reforma}</h3>
                  <h3>Nº presupuesto: {clientes.presupuesto}</h3>
                </li>
              ))}
            </ul>
            <div className="datosObra"></div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="login">
      <div className="loginTexto">
        <h1 className="loginBienvenida">{titulo}</h1>

        <h2>Inserta tus datos para acceder a tu espacio</h2>
      </div>
      <div className="loginFormulario">
        <input
          className="estiloFormulario"
          type="text"
          onChange={(e) => setIdPresupueto(e.target.value)}
          placeholder="Nº de presupuesto"
        ></input>
        <button onClick={buscarCliente}>Entrar</button>
      </div>
      {MostrarTarjetaCliente()}
    </div>
  );
}

export default Login;

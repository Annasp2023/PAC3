import "../App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./perfil.css";
import CabeceraPerfil from "./cabeceraPerfil";
import ProgressBar from "./progressBar";

function PerfilUsuario(props) {
  const [clientes, setClientes] = useState([]);
  const [fases, setFases] = useState({
    Derribos: false,
    Climatizacion: false,
    Pavimentos: false,
    Instalaciones: false,
    Carpinteria: false,
  });
  const AddFases = (fases) => {
    let htmlFases = [];
    if (fases.Derribos) htmlFases.push(<h3>Derribo</h3>);
    if (fases.Climatizacion) htmlFases.push(<h3>Climatizacion</h3>);
    if (fases.Pavimentos) htmlFases.push(<h3>Pavimentos</h3>);
    if (fases.Instalaciones) htmlFases.push(<h3>Instalaciones</h3>);
    if (fases.Carpinteria) htmlFases.push(<h3>Carpinteria</h3>);
    console.log(htmlFases);
    return htmlFases;
  };

  useEffect(() => {
    axios
      .get("https://base-datos-clientes.onrender.com/consultarClientes")
      .then((result) => setClientes(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="perfil">
        <ul className="datosPerfil">
          {clientes.map((cliente) => (
            <li key={cliente._id}>
              <img
                src="https://pbs.twimg.com/profile_images/980145664712740864/aNWjR7MB_400x400.jpg"
                className="imgPerfil"
              ></img>
              <h1>{cliente.nombre}</h1>
              <h3>{cliente.reforma}</h3>
              <h3>Nº presupuesto: {cliente.presupuesto}</h3>
              <h3>Fases:</h3>
              <div>{AddFases(cliente.fases)}</div>
            </li>
          ))}
        </ul>

        <div className="datosObra">
          <ProgressBar />
          <CabeceraPerfil />
        </div>
      </div>
    </>
  );
}
export default PerfilUsuario;

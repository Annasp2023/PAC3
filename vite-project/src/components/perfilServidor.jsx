import "../App.css";
import CabeceraPerfilServidor from "./cabeceraPerfilServidor";
import InsertarCliente from "./insertarCliente";
import ConsultarCliente from "./consultarCliente";
import React, { useState, useEffect } from "react";
import axios from "axios";

function PerfilServidor() {
  const [clientes, setClientes] = useState([]);

  const LoadClients = () => {
    console.log("loading");
    axios
      .get("http://localhost:3001/consultarClientes")
      .then((result) => setClientes(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    LoadClients();
  }, []);

  return (
    <>
      <div className="perfil">
        <InsertarCliente />

        <div className="datosObra">
          <ConsultarCliente clientes={clientes} />
          <CabeceraPerfilServidor />
        </div>
      </div>
    </>
  );
}
export default PerfilServidor;

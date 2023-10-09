import { useEffect, useState } from "react";
import axios from "axios";
import ConsultarCliente from "./consultarCliente";
import UploadImages from "./uploadImage";

function InsertarCliente() {
  const [nombre, setNombre] = useState("");
  const [reforma, setReforma] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [fases, setFases] = useState({
    Derribos: false,
    Climatizacion: false,
    Pavimentos: false,
    Instalaciones: false,
    Carpinteria: false,
  });

  const Submit = (e) => {
    e.preventDefault();
    console.log(fases);
    console.log(nombre);
    axios
      .post("https://base-datos-clientes.onrender.com/createClientes", {
        nombre,
        reforma,
        presupuesto,
        fases,
      })
      .then((result) => {
        window.location.reload(false);
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={Submit} className="datosCliente">
        <h2>Insertar del cliente</h2>
        <input
          className="inputDatosCliente"
          type="text"
          placeholder="Nombre del cliente"
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <input
          className="inputDatosCliente"
          type="text"
          placeholder="Tipo de reforma"
          onChange={(e) => setReforma(e.target.value)}
        ></input>
        <input
          className="inputDatosCliente"
          type="text"
          placeholder="Nº de presupuesto"
          onChange={(e) => setPresupuesto(e.target.value)}
        ></input>
        <div>
          <div className="formCheckbox">
            <label htmlFor="">Derribos</label>

            <input
              type="checkbox"
              onChange={() => {
                setFases({ ...fases, Derribos: !fases.Derribos });
              }}
              value={fases.Derribos}
              placeholder="Derribos"
            ></input>
          </div>
          <div className="formCheckbox">
            <label htmlFor="">Climatización</label>

            <input
              type="checkbox"
              onChange={() => {
                setFases({ ...fases, Climatizacion: !fases.Climatizacion });
              }}
              value={fases.Climatizacion}
              placeholder="Climatización"
            ></input>
          </div>
          <div className="formCheckbox">
            <label htmlFor="">Pavimiento y revestimiento</label>

            <input
              type="checkbox"
              onChange={() =>
                setFases({ ...fases, Pavimentos: !fases.Pavimentos })
              }
              value={fases.Pavimentos}
              placeholder="Pavimiento y revestimiento"
            ></input>
          </div>
          <div className="formCheckbox">
            <label htmlFor="">Instalaciones</label>

            <input
              type="checkbox"
              onChange={() =>
                setFases({ ...fases, Instalaciones: !fases.Instalaciones })
              }
              value={fases.Instalaciones}
              placeholder="Instalaciones"
            ></input>
          </div>
          <div className="formCheckbox">
            <label htmlFor="">Carpintería</label>

            <input
              type="checkbox"
              onChange={() =>
                setFases({ ...fases, Carpinteria: !fases.Carpinteria })
              }
              value={fases.Carpinteria}
              placeholder="Carpintería"
            ></input>
          </div>
        </div>
        <button onClick={Submit} className="enviarCliente">
          Enviar
        </button>
      </form>
    </>
  );
}

export default InsertarCliente;

import React, { useState, useEffect, useInsertionEffect } from "react";
import axios from "axios";
import "../App.css";
import "./consultarCliente.css";
import "./perfil.css";
import ProgressBar from "./progressBar";

function ConsultarCliente(clientes) {
  console.log(clientes);
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://base-datos-clientes.onrender.com/borrarCliente/${id}`)

      .then((res) => {
        window.location.reload(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

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

  return (
    <>
      <div className="clientes">
        <h1>Clientes</h1>
        <ul className="tarjetaCliente">
          {clientes.clientes.map((cliente) => (
            <li className="cardCliente" key={cliente.presupuesto}>
              <h2>{cliente.nombre}</h2>
              <h3>{cliente.reforma}</h3>
              <h3>Nº presupuesto: {cliente.presupuesto}</h3>
              <h3>Fases:</h3>
              <div>{AddFases(cliente.fases)}</div>
              <ProgressBar />

              <button onClick={(e) => handleDelete(cliente._id)}>Borrar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ConsultarCliente;

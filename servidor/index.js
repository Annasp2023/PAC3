const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Clientes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://annasp:40514051@cluster0.ms3rhyf.mongodb.net/PAC3?retryWrites=true&w=majority/"
);
/* mongodb+srv://annasp:40514051@cluster0.ms3rhyf.mongodb.net */
app.get("/consultarClientes", (req, res) => {
  UserModel.find({})
    .then((clientes) => res.json(clientes))
    .catch((err) => res.json(err));
});

app.get("/buscarCliente/:presupuesto", (req, res) => {
  console.log(`Buscar ${req.params.presupuesto}`);
  UserModel.find({ presupuesto: req.params.presupuesto })
    .then((cliente) => {
      res.json(cliente);
    })
    .catch((err) => res.json(err));
});

app.post("/createClientes", (req, res) => {
  console.log(req.body);
  UserModel.create(req.body)
    .then((cliente) => res.json(cliente))
    .catch((err) => res.json(err));
});

app.delete("/borrarCliente/:id", (req, res) => {
  console.log(`Delete! ${req.params.id}`);
  UserModel.findByIdAndDelete({ _id: req.params.id })
    .then((res) => res.json())
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("iniciado correctamente");
});

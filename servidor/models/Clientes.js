const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: String,
  reforma: String,
  presupuesto: String,
  fases: Object,
});

const UserModel = mongoose.model("clientes", UserSchema);
module.exports = UserModel;

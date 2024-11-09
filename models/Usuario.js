const mongoose = require("mongoose");

const esquemaUsuario = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // otros campos...
});

const Usuario = mongoose.model("Usuario", esquemaUsuario);

module.exports = Usuario;

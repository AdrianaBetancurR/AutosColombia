// modelos/Vehiculo.js
const mongoose = require("mongoose");

const esquemaVehiculo = new mongoose.Schema({
    placa: String,
    propietario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
    celda: { type: mongoose.Schema.Types.ObjectId, ref: "Celda" },
    horaEntrada: Date,
    horaSalida: Date,
    novedades: String
});

module.exports = mongoose.model("Vehiculo", esquemaVehiculo);


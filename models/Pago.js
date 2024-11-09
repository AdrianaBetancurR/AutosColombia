// modelos/Pago.js
const mongoose = require("mongoose");

const esquemaPago = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
    vehiculo: { type: mongoose.Schema.Types.ObjectId, ref: "Vehiculo" },
    monto: Number,
    fechaPago: Date
});

module.exports = mongoose.model("Pago", esquemaPago);


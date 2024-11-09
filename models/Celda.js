// modelos/Celda.js
const mongoose = require("mongoose");

const esquemaCelda = new mongoose.Schema({
    numero: Number,
    ocupada: Boolean,
});

module.exports = mongoose.model("Celda", esquemaCelda);


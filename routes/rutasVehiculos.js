// rutas/rutasVehiculos.js
const express = require("express");
const router = express.Router();
const Vehiculo = require("../models/vehiculo");
const Celda = require("../models/Celda");


router.post("/entrada", async (req, res) => {
    const { placa, propietario, numeroCelda } = req.body;
    const celda = await Celda.findOne({ numero: numeroCelda });
    if (!celda || celda.ocupada) return res.status(400).json({ error: "Celda no disponible" });

    const vehiculo = new Vehiculo({ placa, propietario, celda: celda._id, horaEntrada: new Date() });
    celda.ocupada = true;
    await celda.save();
    await vehiculo.save();
    res.json({ mensaje: "Entrada registrada", vehiculo });
});

router.post("/salida", async (req, res) => {
    const { placa } = req.body;
    const vehiculo = await Vehiculo.findOne({ placa, horaSalida: null });
    if (!vehiculo) return res.status(400).json({ error: "Vehículo no encontrado" });

    vehiculo.horaSalida = new Date();
    await vehiculo.save();

    const celda = await Celda.findById(vehiculo.celda);
    celda.ocupada = false;
    await celda.save();

    res.json({ mensaje: "Salida registrada", vehiculo });
});

module.exports = router;

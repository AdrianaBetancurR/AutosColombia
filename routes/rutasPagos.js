// rutas/rutasPagos.js
const express = require("express");
const router = express.Router();
const Pago = require("../models/Pago");


router.post("/registrar", async (req, res) => {
    const { usuario, vehiculo, monto } = req.body;
    const pago = new Pago({ usuario, vehiculo, monto, fechaPago: new Date() });
    await pago.save();
    res.json({ mensaje: "Pago registrado", pago });
});

module.exports = router;

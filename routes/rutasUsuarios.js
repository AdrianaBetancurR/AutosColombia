// rutas/rutasUsuarios.js
const express = require("express");
const router = express.Router();
const Usuario = require("../models/usuario");


router.post("/registrar", async (req, res) => {
    const { nombre, correo, contraseña, telefono } = req.body;
    const nuevoUsuario = new Usuario({ nombre, correo, contraseña, telefono });
    await nuevoUsuario.save();
    res.json({ mensaje: "Usuario registrado", nuevoUsuario });
});

module.exports = router;

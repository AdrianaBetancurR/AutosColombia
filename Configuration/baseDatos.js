// Configuration/baseDatos.js
const mongoose = require("mongoose");

const conectarBaseDatos = async () => {
    try {
        await mongoose.connect("mongodb+srv://adrianabetancur99:autos@cluster0.hqjco.mongodb.net/", {
        
        });
        console.log("Base de datos MongoDB conectada...");
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error.message);
        process.exit(1);
    }
};

module.exports = conectarBaseDatos;
    
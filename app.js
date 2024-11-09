// aplicacion.js
const express = require("express");
const bodyParser = require("body-parser");
const conectarBaseDatos = require("./Configuration/baseDatos"); // Cambié Configuration a configuracion
const rutasUsuarios = require("./routes/rutasUsuarios");
const rutasVehiculos = require("./routes/rutasVehiculos");
const rutasPagos = require("./routes/rutasPagos");

const app = express();
conectarBaseDatos();

app.use(bodyParser.json());

app.use("/usuarios", rutasUsuarios);
app.use("/vehiculos", rutasVehiculos);
app.use("/pagos", rutasPagos);

const PUERTO = process.env.PORT || 5000;
app.listen(PUERTO, () => console.log(`Servidor corriendo en el puerto ${PUERTO}`));

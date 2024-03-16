const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

// Importación de middlewares
const errorHandler = require("./api/middlewares/errorHandler");

// Importación de rutas
const vehicleRoutes = require("./api/routes/vehicleRoutes");
const routeRoutes = require("./api/routes/routeRoutes");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Successful connection to MongoDB"))
  .catch((err) => console.log("Error connection to MongoDB", err));

app.use(errorHandler);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}!`);
});
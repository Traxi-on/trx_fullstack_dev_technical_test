const Vehicle = require("../models/vehicleModel");

// Obtener todos los veículos
exports.getAllVehicles = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  try {
    const totalVehicles = await Vehicle.countDocuments();
    const totalPages = Math.ceil(totalVehicles / pageSize);

    const vehicles = await Vehicle.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json({
      vehicles,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Obtener un vehículo por ID
exports.getVehicleById = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    console.log(req.params.id);
    if (vehicle) {
      res.status(200).json(vehicle);
    } else {
      res.status(404).json({ message: "Vehículo no encontrado" });
    }
  } catch (error) {
    next(error);
  }
};

// Crear un vehículo
exports.createVehicle = async (req, res, next) => {
  const {
    placa,
    numeroEconomico,
    vin,
    asientos,
    seguro,
    numeroSeguro,
    marca,
    modelo,
    anio,
    color,
  } = req.body;

  // Validar los datos de entrada
  if (
    !placa ||
    !numeroEconomico ||
    !vin ||
    !asientos ||
    !seguro ||
    !numeroSeguro ||
    !marca ||
    !modelo ||
    !anio ||
    !color
  ) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  try {
    const newVehicle = new Vehicle({
      placa,
      numeroEconomico,
      vin,
      asientos,
      seguro,
      numeroSeguro,
      marca,
      modelo,
      anio,
      color,
    });
    const savedVehicle = await newVehicle.save();
    req.io.emit("vehicleCreated", savedVehicle);
    res.status(201).json(savedVehicle);
  } catch (error) {
    next(error);
  }
};

// Actualizar un vehículo
exports.updateVehicle = async (req, res, next) => {
  const vehicleId = req.params.id;
  // Validar que se proporcionen los campos necesarios para la actualización
  const {
    placa,
    numeroEconomico,
    vin,
    asientos,
    seguro,
    numeroSeguro,
    marca,
    modelo,
    anio,
    color,
  } = req.body;
  if (
    !placa ||
    !numeroEconomico ||
    !vin ||
    !asientos ||
    !seguro ||
    !numeroSeguro ||
    !marca ||
    !modelo ||
    !anio ||
    !color
  ) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios para actualizar el vehículo",
    });
  }

  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      vehicleId,
      {
        placa,
        numeroEconomico,
        vin,
        asientos,
        seguro,
        numeroSeguro,
        marca,
        modelo,
        anio,
        color,
      },
      { new: true }
    );
    if (updatedVehicle) {
      req.io.emit("vehicleUpdated", updatedVehicle);
      res.status(200).json(updatedVehicle);
    } else {
      res.status(404).json({ message: "Vehículo no encontrado" });
    }
  } catch (error) {
    next(error);
  }
};

// Eliminar un vehículo por ID
exports.deleteVehicle = async (req, res, next) => {
  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (deletedVehicle) {
      req.io.emit("vehicleDeleted", { id: req.params.id });
      res.status(200).json({ message: "Vehículo eliminado" });
    } else {
      res.status(404).json({ message: "Vehículo no encontrado" });
    }
  } catch (error) {
    next(error);
  }
};

// Buscar un vehículos
exports.searchVehicles = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const keyword = req.query.keyword;

  try {
    let query = {};
    if (keyword) {
      query = {
        $or: [
          { placa: { $regex: new RegExp(keyword, "i") } },
          { numeroEconomico: { $regex: new RegExp(keyword, "i") } },
          { vin: { $regex: new RegExp(keyword, "i") } },
          { seguro: { $regex: new RegExp(keyword, "i") } },
          { marca: { $regex: new RegExp(keyword, "i") } },
          { modelo: { $regex: new RegExp(keyword, "i") } },
          { color: { $regex: new RegExp(keyword, "i") } },
        ],
      };
    }
    const totalVehicles = await Vehicle.countDocuments(query);
    const totalPages = Math.ceil(totalVehicles / pageSize);
    const vehicles = await Vehicle.find(query)
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json({
      vehicles,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    next(error);
  }
};

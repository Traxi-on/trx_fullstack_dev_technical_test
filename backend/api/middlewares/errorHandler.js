function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  if (process.env.NODE_ENV === "development") {
    console.error(err.stack);
  }
  res.status(statusCode);

  res.json({
    message: err.message,
    // Condición: si el entorno es desarrollo, incluye el stack del error.
    ...(process.env.NODE_ENV === "development" ? { stack: err.stack } : {}),
    // Condición: si hay detalles adicionales del error, inclúyelos.
    ...(err.details ? { details: err.details } : {}),
  });
}

module.exports = errorHandler;

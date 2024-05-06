const cors = require('cors');
const express = require('express');
const connectDB = require('./config/mongo/mongo');

class Server {
  constructor() {
    this.config();
    this.middlewares();
    this.routes();
    this.connectDB();
  }

  async connectDB() {
    await connectDB();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  config() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.vehiclePath = '/api/vehicle';
    ;
  }

  routes() {
    this.app.use(this.vehiclePath, require('./routes/vehicle.routes'));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;

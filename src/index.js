const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const vehicleRoutes = require('./routes/vehicle');
require('dotenv').config();

const app = express();
app.use(cors());
const port = process.env.PORT || 9000;


//moddleware
app.use(express.json());
app.use('/api',vehicleRoutes)

//routes
app.get('/', (req, res) => {
  //redirecto to the api routes
  res.redirect('/api/vehicles');
});

//mongodb conection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("conected to mongodb"))
.catch((err)=> console.log(err));


app.listen(port, () => 
  console.log('Server is running on port '+ port));
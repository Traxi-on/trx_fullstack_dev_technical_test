import "dotenv/config";
import express from 'express';
import cors from 'cors';
import vehiclesRoutes from './routes/vehicules.routes'
import db from './config/mongo'
const PORT = process.env.PORT || 4000;
const app=express();

app.use(cors());
app.use(express.json());
db().then(()=>console.log("db ready"));
app.use('/api/vehicles',vehiclesRoutes);

app.listen(PORT,()=>console.log(`Escuchando por el puerto ${PORT}`));

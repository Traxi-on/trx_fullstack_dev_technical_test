const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();



mongoose
  .connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
           {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

let appid = 3000;
if(process.env.APPID!=null && process.env.APPID!=undefined) appid=process.env.APPID;
const server=app.listen(appid, () => console.info(`${appid} is listening on ${appid}`));

module.exports=server;

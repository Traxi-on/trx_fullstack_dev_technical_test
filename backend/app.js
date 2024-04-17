require('dotenv').config();
const Server = require('./src/server');
console.log('***************************************************************************************');
console.log(` \t\t\t ENVIRONMENT ON `)
console.log('*************************************************************************************** \n');    


const server = new Server();




server.listen();
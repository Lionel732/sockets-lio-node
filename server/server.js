// Requires 
const express = require('express');
const app = express();
const socketIO = require('socket.io');
const path = require('path'); // modulo que trae node por defecto
const http = require('http'); // modulo que trae node por defecto

// --------------------------------------------------------------------------------------

let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;



app.use(express.static(publicPath));

// IO =  esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket')





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});


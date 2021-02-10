
  var socket = io();

  // Conexión --- on() ----- > Escuchar información
  socket.on('connect', function () {
      console.log('Conectado al servidor');
  });

  // Desconexión --- on() ----- > Escuchar información
  socket.on('disconnect', function () {
      console.log('Perdimos conexión con el servidor');
  });

  // emit() ---- > Enviar información
  socket.emit('enviarMensaje', {
      usuario: 'Fernando',
      mensaje: 'Hola mundo'
  }, function (resp) {
      console.log('Respuesta server: ', resp);
  });

  // Escuchar información
  socket.on('enviarMensaje', function (mensaje) {
  console.log('Servidor: ', mensaje);
  });
  
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var ioServer = require('./ioServer');
var debug = require('debug')('recordStreamExpress:server');
var http = require('http');
var path = require('path');
var fs = require('fs');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '443');
ioServer.set('port', port);

/**
 * Create HTTPS server.
 */
// var updir=__dirname.slice(0,-4);
// var  options={
//   key: fs.readFileSync(path.join(updir, 'fake-keys/v.jiashizhan.com.key')),
//   cert: fs.readFileSync(path.join(updir, 'fake-keys/v.jiashizhan.com.pem'))
// };



var server = http.createServer(ioServer);
server= server.listen(process.env.PORT || port, process.env.IP || "192.168.0.126", function() {
  var addr = server.address();
  console.log("server listening at", addr.address + ":" + addr.port);
});
//websocket listens at server

var io = require('socket.io')(server);

var ioHandler = require('./IO-Handler.js');
// var wsHandler = require('../server/RTC_huiyishi_Handler.js');
io.sockets.on('connection', ioHandler);



server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

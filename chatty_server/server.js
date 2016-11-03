'use strict';
const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 5000
const PORT = 5000;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });



// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', function(data, flags) {
     let message = JSON.parse(data);
     wss.broadcast(message);
});



  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});

  wss.broadcast = function (data) {
  console.log("Broadcasting to clients");


   switch(data.type) {
      case "incomingMessage":
           console.log("incominMessage")// handle incoming message
        break;
      case "incomingNotification":
          console.log("incomingNotification")// handle incoming notification
        break;
      default:
        // show an error in the console if the message type is unknown
        throw new Error("Unknown event type " + data.type);}


  let changeType = data;
  console.log(data);
  changeType.type = "postMessage";
  wss.clients.forEach(function (client) {
    client.send(JSON.stringify(data));
  });
};
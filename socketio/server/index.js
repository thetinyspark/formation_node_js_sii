const socketio  = require("socket.io");
const server    = socketio(3000);

function welcomeHandler(clientSocket){
    clientSocket.emit(
        "connection:accepted",
        "Welcome on this server, please be respectful"
    );
}

function init(clientSocket){
    clientSocket.on(
        "request:connection", ()=>{
            welcomeHandler(clientSocket);
        }
    );
}
server.on("connection", init);
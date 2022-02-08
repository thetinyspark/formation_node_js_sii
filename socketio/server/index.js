const socketio  = require("socket.io");
const server    = socketio(3000);
const _         = require("underscore");

const channelMessages = [];

function welcomeHandler(clientSocket){

    clientSocket.emit(
        "connection:accepted",
        `
        ******* Welcome on this server, please be respectful ****** 
        `
    );
}

function onChannelMessage(clientSocket, msg){
    const parts = msg.split(":");
    const pseudo = parts[0]; 
    const realMsg = parts[1];
    channelMessages.push(
        {
            pseudo, 
            msg: realMsg
        }
    );
}

function onRequestPseudoMessage(clientSocket, msg){
    const pseudo = msg;
    const messages = _.filter(channelMessages, {pseudo: pseudo}); 
    clientSocket.emit("receive:pseudo:msg", messages);
}

function init(clientSocket){
    clientSocket.on(
        "request:connection", 
        ()=>{
            welcomeHandler(clientSocket);
        }
    );
    clientSocket.on( 
        "channel:msg", 
        (msg)=>{
            onChannelMessage(clientSocket, msg)
        }
    );
    clientSocket.on(
        "request:pseudo:msg", 
        (msg)=>{
            onRequestPseudoMessage(clientSocket, msg);
        }
    )
}
server.on("connection", init);
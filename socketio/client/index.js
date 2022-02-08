const io = require("socket.io-client");
const socket = io("ws://localhost:3000");

function onConnectionAccepted(msg){
    console.log(msg);
}

function start(){
    console.log("Connected to server");
    console.log("trying to connect to channel...");
    socket.emit("request:connection","");
}
socket.on("connect", start);
socket.on(
    "connection:accepted", 
    onConnectionAccepted
);

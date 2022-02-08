const io = require("socket.io-client");
const socket = io("ws://localhost:3000");

function onConnectionAccepted(msg){
    console.log(msg);

    socket.emit("channel:msg", "bilbon: Je suis vieux Gandalf");
    socket.emit("channel:msg", "gandalf: Flamme doudoune");
    socket.emit("channel:msg", "gandalf: vous ne passerez pas");
    socket.emit("channel:msg", "gollum: mon précieux");

    socket.emit("request:pseudo:msg", "gandalf");
}

function onReceivePseudoMessage(msg){
    console.log(msg);
}

function start(){
    console.log("Connected to server");
    console.log("trying to connect to channel...");
    socket.emit("request:connection","");
}
socket.on("connect", start);
socket.on("connection:accepted", onConnectionAccepted);
socket.on("receive:pseudo:msg", onReceivePseudoMessage);


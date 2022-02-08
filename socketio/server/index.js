const socketio  = require("socket.io");
const server    = socketio(3000);
const _         = require("underscore");

const serverEvents = [
    {
        type:"request:connection", 
        requestParams:[], 
        clientSide: true
    }, 
    {
        clientSide: true,
        type:"channel:push:msg", 
        requestParams:[
            {
                name:"channelId", 
                type: "number"
            }, 
            {
                name:"message", 
                type:"string"
            }
        ]
    }, 
    {
        clientSide: false, 
        type: "internal", 
        requestParams:[]
    }
]

function welcomeHandler(clientSocket){
    const list = _.map( 
        _.filter(
            serverEvents, 
            {clientSide: true}
        ), 
        (currentServerEvent)=>{
            const paramList = _.map( 
                currentServerEvent.requestParams, 
                (param)=>{
                    return `${param.name}<${param.type}>,`;
                }
            );

            return `
                ${currentServerEvent.type} - [${paramList.join("")}]
            `;
        }
    );

    clientSocket.emit(
        "connection:accepted",
        `
        ******* Welcome on this server, please be respectful ****** 
        List of events you can send: 
        ${list.join("")}
        `
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
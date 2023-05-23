// const WebSocket = require("ws")

// const wss = new WebSocket.Server({port: 8082})

// wss.on("connection", (ws) => {
//     console.log("New client connected");
// ws.on("message", (data)=>{
//     console.log(Client sent us: ${data}); 
//      ws.send(data.toString()) ; 
// } )
// ws.on("close", () => {
//     console.log("Client has disconnected");
//     })
// })

// let WebSocket = require("ws")

// const wss = new WebSocket.Server({port:8082})

// wss.on("connection" , (failed) => {
//     console.log("Client connected");
// failed.on("close", (data) => {
//     console.log("Client disconnected");
//     return data
// })
// data.on("message", (e)=> {
//     wss.clients.forEach((client) => {
//         console.log(client);
// console.log(e.data);
//     })
// })
// })
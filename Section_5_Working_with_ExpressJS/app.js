const http = require("http");
// const routes = require("./routes");
const express = require("express"); //đặt biến cho thư viện

// console.log(routes.someText);

// function rqListener(req, res){

// }

// const server = http.createServer(routes);
// const server = http.createServer(routes.handler);
const app = express(); // dùng app để chạy express dưới dạng hàm
const server = http.createServer();
server.listen(5657);

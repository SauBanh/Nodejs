// const http = require("http");
// const routes = require("./routes");
const express = require("express"); //đặt biến cho thư viện

// console.log(routes.someText);

// function rqListener(req, res){

// }

// const server = http.createServer(routes);
// const server = http.createServer(routes.handler);
const app = express(); // dùng app để chạy express dưới dạng hàm
app.use("/add-product", (req, res, next) => {
    console.log("Add Product Page");
    res.send("<h1>Add Product Page</h1>");
    // next();
});

app.use("/", (req, res, next) => {
    console.log('I"m Tuấn Anh');
    res.send("<h1>Hello Nodejs</h1>");
});

// const server = http.createServer(app);
app.listen(5657);

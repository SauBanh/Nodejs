// const http = require("http");
// const routes = require("./routes");
const express = require("express"); //đặt biến cho thư viện
const bodyParser = require("body-parser");

// console.log(routes.someText);

// function rqListener(req, res){

// }

// const server = http.createServer(routes);
// const server = http.createServer(routes.handler);
const app = express(); // dùng app để chạy express dưới dạng hàm

// app.use("/", (req, res, next) => {
//     // console.log('This always run');
//     // res.send("<h1>Hello Nodejs</h1>");
//     next();
// });
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
    // console.log("Add Product Page");
    res.send(
        "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
    );
    // next();
});

app.use("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    // console.log('I"m Tuấn Anh');
    res.send("<h1>Hello Nodejs</h1>");
});

// const server = http.createServer(app);
app.listen(5657);

// const http = require("http");
// const routes = require("./routes");
const express = require("express"); //đặt biến cho thư viện
const path = require("path");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const bodyParser = require("body-parser");

// console.log(routes.someText);

// function rqListener(req, res){

// }

// const server = http.createServer(routes);
// const server = http.createServer(routes.handler);
const app = express(); // dùng app để chạy express dưới dạng hàm

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter.routers);
app.use(shopRouter);

// app.use("/", (req, res, next) => {
//     // console.log('This always run');
//     res.send("<h1>Hello Nodejs</h1>");
//     next();
// });

// router.use("/add-product", (req, res, next) => {
//     // console.log("Add Product Page");
//     res.send(
//         "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
//     );
//     // next();
// });

// router.post("/product", (req, res, next) => {
//     // console.log(req.body);
//     res.redirect("/");
// });

// app.use("/", (req, res, next) => {
//     // console.log('I"m Tuấn Anh');
//     res.send("<h1>Hello Nodejs</h1>");
// });

// const server = http.createServer(app);

app.use((req, res, next) => {
    res.status(404).render("404", {
        title: "Not Found",
        pageTitle: "Page not found",
    });
});

app.listen(5657);

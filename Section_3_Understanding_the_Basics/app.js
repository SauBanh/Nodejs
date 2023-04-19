const http = require("http");

// function rqListener(req, res){

// }

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
});

server.listen(5657);

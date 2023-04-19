const http = require("http");

// function rqListener(req, res){

// }

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
        );
        res.write("</html>");
        return res.end();
    }
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Tuấn Anh đẹp trai</title></head>");
    res.write(
        "<body><h1>Dòng này được viết bởi res.write của nodejs</h1></body>"
    );
    res.write("</html>");
    res.end(); // sau khi kết thúc sẽ không thể write bất cứ cái gì vào được nữa
});

server.listen(5657);

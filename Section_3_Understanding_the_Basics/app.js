const http = require("http");
const fs = require("fs");
// function rqListener(req, res){

// }

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
        );
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        fs.writeFileSync("message.txt", "Nguyễn Tuấn Anh đẹp trai");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
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

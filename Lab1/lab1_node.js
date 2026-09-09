/*
Purpose: We'll use Node to Create a Server and then listen on that server for any incoming request. Then return a response. 
*/
var http = require("http")

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type" : "text/html"
    })
    res.end("Server in now running sucessfully and listening")
}).listen("8088")
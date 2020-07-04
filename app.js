var http = require("http");
var fs = require("fs");
var express = require('express');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

http.createServer(function(req, res) {
    fs.readFile("index.html", function(err, data) {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(data);
        return res.end();
    })
}).listen(8080);
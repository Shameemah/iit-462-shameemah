var http = require("http"),
    server;

var redis = require("redis");
var redisClient = redis.createClient();

server = http.createServer(function (req, res) {
    redisClient.put("counter", 0)
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World!\n Counter: " + redisClient.get("counter"));
});

server.listen(3000);

console.log("Server running on port 3000");

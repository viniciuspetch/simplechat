var express = require("express");
var path = require("path");
const port = 8000;

var app = express();

var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.use(express.static("./public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/../public/html/index.html"));
});

io.on("connection", function (socket) {
  socket.emit("main", { username: "System", message: "Hello" });
  socket.on("main", (msg) => {
    console.log(msg);
    if (msg.room) {
      io.to(msg.room).emit("main", msg);
    } else {
      io.emit("main", msg);
    }
  });
  socket.on("command", (msg) => {
    console.log("event: command");
    console.log(msg);
    socket.join(msg.room);
  });
});

http.listen(port || 8000, function () {
  console.log("Listening");
});

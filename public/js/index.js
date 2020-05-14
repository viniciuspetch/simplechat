var socket = io();
var chatIn = document.getElementById("chat-in");
var chatInMsg = document.getElementById("chat-in-msg");
var messages = document.getElementById("messages");
chatIn.onsubmit = function (e) {
  e.preventDefault();
  socket.emit("main", chatInMsg.value);
  chatInMsg.value = "";
};
socket.on("main", function (msg) {
  var listItem = document.createElement("LI");
  var content = document.createTextNode(msg);
  listItem.appendChild(content);
  messages.appendChild(listItem);
});
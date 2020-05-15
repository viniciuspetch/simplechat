var socket = io();
var chatIn = document.getElementById("chat-in");
var chatInMsg = document.getElementById("chat-in-msg");
var usernameInput = document.getElementById("username-input");
var messages = document.getElementById("messages");

chatIn.onsubmit = function (e) {
  e.preventDefault();
  var message = chatInMsg.value;
  var username = usernameInput.value;
  data = { username, message };
  socket.emit("main", data);
  chatInMsg.value = "";
};
socket.on("main", function (data) {
  var listItem = document.createElement("LI");
  var content = document.createTextNode(data.username + ": " + data.message);
  listItem.appendChild(content);
  messages.appendChild(listItem);
});

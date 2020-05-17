var socket = io();
var chatIn = document.getElementById("chat-in");
var usernameForm = document.getElementById("username-form");
var roomForm = document.getElementById("room -98-form");
var chatInMsg = document.getElementById("chat-in-msg");
var usernameInput = document.getElementById("username-input");
var messages = document.getElementById("messages");
var username = "";

chatIn.onsubmit = function (e) {
  e.preventDefault();
  var message = chatInMsg.value;
  data = { username, message };
  socket.emit("main", data);
  chatInMsg.value = "";
};

usernameForm.onsubmit = function (e) {
  e.preventDefault();
  username = usernameInput.value;
};

socket.on("main", function (data) {
  var listItem = document.createElement("LI");
  var content = document.createTextNode(data.username + ": " + data.message);
  listItem.appendChild(content);
  messages.appendChild(listItem);
});

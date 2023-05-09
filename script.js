var input = document.getElementById("name");
var tasklist = document.getElementsByTagName("ul")[0];
function addTask() {
  var lisElement = document.createElement("li");
  var textnode = document.createTextNode(input.value);
  lisElement.appendChild(textnode);
  tasklist.appendChild(lisElement);
}
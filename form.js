// //
function showAlert() {
  alert("you clicked the alert button");
}

const alertButton = document.getElementById("alert-button");
alertButton.addEventListener("click", function () {
  alert("you clicked the alert button");
});

function showConsole() {
  console.log("you clicked");
}
const alertConsole = document.getElementsByClassName("click_button")[1];
alertConsole.addEventListener("click", showConsole);
// dasgal
const showButton = document.getElementById("show-button");

const erasebutton = document.getElementById("erase-button");
showButton.addEventListener("click", function () {
  document.getElementById("text").innerHTML = "hi huurhun nima";
});
erasebutton.addEventListener("click", function () {
  document.getElementById("text").innerHTML = "";
});

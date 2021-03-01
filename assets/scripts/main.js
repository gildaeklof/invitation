const goDown = document.querySelector(".redirect");
const goUp = document.querySelector(".arrowgr");
const arrow = document.querySelector(".arrow");
const regButton = document.querySelector(".register");
const signUp = document.querySelector(".signup-info");

goDown.addEventListener("click", () => {
  window.location.href = "#signup";
});

goUp.addEventListener("click", () => {
  window.location.href = "#main";
});

regButton.addEventListener("click", () => {
  signUp.innerHTML =
    "Tack för din anmälan!<br><br> Din anmälan är mottagen och du kommer få ett mejl med mer info inom kort.";
  regButton.innerHTML = "Tack!";
});

/*function showArrow() {
  arrow.style.visibility = "visible";
}
setTimeout("showArrow()", 3000);*/

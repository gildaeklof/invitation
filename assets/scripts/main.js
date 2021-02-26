const goDown = document.querySelector(".redirect");
const goUp = document.querySelector(".arrowgr");
const arrow = document.querySelector(".arrow");

goDown.addEventListener("click", () => {
  window.location.href = "#signup";
});

goUp.addEventListener("click", () => {
  window.location.href = "#main";
});

/*function showArrow() {
  arrow.style.visibility = "visible";
}
setTimeout("showArrow()", 3000);*/

const goDown = document.querySelector(".redirect");
const goUp = document.querySelector(".arrowgr");
const arrow = document.querySelector(".arrow");
const regButton = document.querySelector(".register");
const signUp = document.querySelector(".signup-info");
const content = document.querySelector(".dynamic-content");
const content2 = document.querySelector(".dynamic-content-2");

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

const mediaQuery = window.matchMedia("(max-width: 800px)");

if (mediaQuery.matches) {
  console.log("Media Query Matched!");
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

content.innerHTML = getUrlParameter("name");
content2.setAttribute("value", getUrlParameter("email"));

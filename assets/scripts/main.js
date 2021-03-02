const goDown = document.querySelector(".redirect");
const goUp = document.querySelector(".arrowgr");
const arrow = document.querySelector(".arrow");
const regButton = document.querySelector(".register");
const signUp = document.querySelector(".signup-info");
const dynamicName = document.querySelector(".dynamic-name");
const dynamicEmail = document.querySelector(".dynamic-email");
const welcome = document.querySelector(".welcome");

goDown.addEventListener("click", () => {
  window.location.href = "#signup";
});

goUp.addEventListener("click", () => {
  window.location.href = "#main";
});

setTimeout(() => {
  history.replaceState(
    "",
    document.title,
    window.location.origin + window.location.pathname + window.location.search
  );
}, 1);

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

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

dynamicName.innerHTML = capitalize(getUrlParameter("name"));
dynamicEmail.setAttribute("value", getUrlParameter("email"));

if (!getUrlParameter("name")) {
  welcome.style.display = "none";
}

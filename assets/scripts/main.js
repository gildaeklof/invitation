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

arrow.addEventListener("click", () => {
  window.location.href = "#main";
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

const sliderDivs = document.querySelectorAll(".slide-in");

function checkSlide() {
  sliderDivs.forEach((sliderDiv) => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderDiv.offsetHeight / 3;
    const divBottom = sliderDiv.offsetTop + sliderDiv.offsetHeight;
    const isShown = slideInAt > sliderDiv.offsetTop;
    const isNotScrolledPast = window.scrollY < divBottom;
    if (isShown && isNotScrolledPast) {
      sliderDiv.classList.add("active");
    }
  });
}

window.addEventListener("scroll", checkSlide);

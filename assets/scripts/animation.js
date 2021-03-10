const sliderDivs = document.querySelectorAll('.slide-in');
const signUp = document.querySelector('.signup-info');
const eventDiv = document.querySelector('.event-info');
const regButton = document.querySelector('.register');

function checkSlide() {
  sliderDivs.forEach((sliderDiv) => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderDiv.offsetHeight / 3;
    const divBottom = sliderDiv.offsetTop + sliderDiv.offsetHeight;
    const isShown = slideInAt > sliderDiv.offsetTop;
    const isNotScrolledPast = window.scrollY < divBottom;
    if (isShown && isNotScrolledPast) {
      sliderDiv.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkSlide);

regButton.addEventListener('click', () => {
  signUp.style.opacity = 0;
  setTimeout(function () {
    signUp.innerHTML =
      'Tack för din anmälan!<br><br> Din anmälan är mottagen och du kommer få ett mejl med mer info inom kort.';
    regButton.innerHTML = 'Tack!';
    signUp.style.opacity = 1;
  }, 400);
});

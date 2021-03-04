const sliderDivs = document.querySelectorAll('.slide-in');

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

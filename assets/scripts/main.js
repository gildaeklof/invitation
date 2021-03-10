const goDown = document.querySelector('.redirect');
const goUp = document.querySelector('.arrowgr');
const arrow = document.querySelector('.arrow');
const regButton = document.querySelector('.register');

goDown.addEventListener('click', () => {
  window.location.href = '#signup';
});

arrow.addEventListener('click', () => {
  window.location.href = '#main';
});

goUp.addEventListener('click', () => {
  window.location.href = '#main';
});

setTimeout(() => {
  history.replaceState(
    '',
    document.title,
    window.location.origin + window.location.pathname + window.location.search
  );
}, 1);

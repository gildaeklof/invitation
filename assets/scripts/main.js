const goDown = document.querySelector('.redirect');
const goUp = document.querySelector('.arrowgr');
const arrow = document.querySelector('.arrow');
const regButton = document.querySelector('.register');
const signUp = document.querySelector('.signup-info');
const dynamicName = document.querySelector('.dynamic-name');
const dynamicEmail = document.querySelector('.dynamic-email');
const welcome = document.querySelector('.welcome');

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

regButton.addEventListener('click', () => {
  signUp.innerHTML =
    'Tack för din anmälan!<br><br> Din anmälan är mottagen och du kommer få ett mejl med mer info inom kort.';
  regButton.innerHTML = 'Tack!';
});

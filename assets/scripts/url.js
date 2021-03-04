function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

dynamicName.innerHTML = capitalize(getUrlParameter('name'));
dynamicEmail.setAttribute('value', getUrlParameter('email'));

if (!getUrlParameter('name')) {
  welcome.style.display = 'none';
}

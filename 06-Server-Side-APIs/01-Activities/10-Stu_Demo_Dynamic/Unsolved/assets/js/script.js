var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);

      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < data.length; i++) {
        var user = data[i];

        var userNameEl = document.createElement('h3'); // block level elem
        var userUrlEl = document.createElement('p'); // block level
        var userUrlLinkEl = document.createElement('a') // not block level so need to be formated by putting the link inside the p tag.

        userNameEl.textContent = user.login;
        userUrlLinkEl.textContent = user.html_url;
        userUrlLinkEl.href = user.html_url;

        userUrlEl.append(userUrlLinkEl);

        userContainer.append(userNameEl);
        userContainer.append(userUrlEl);
      }
    });
}
fetchButton.addEventListener('click', getApi);

var issueContainer = document.getElementById('issues');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/repos/IBM/clai/issues?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        // create elements
        var userNameEl = document.createElement('h3');
        var issueTitleEl = document.createElement('p');
        // assign text to the elements
        userNameEl.textContent = data[i].user.login;
        issueTitleEl.textContent = data[i].title;
        // append the elements to the container
        issueContainer.append(userNameEl);
        issueContainer.append(issueTitleEl);
      }
    });
}
fetchButton.addEventListener('click', getApi);

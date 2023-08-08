var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      
      console.log(response.status);
      
      if(!response.ok) { // bc 'ok' gives a response from 200-299, which is still 'ok'.
        responseText.textContent = response.status;
      }
      return response.json(); // need this to use the second .then().
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);

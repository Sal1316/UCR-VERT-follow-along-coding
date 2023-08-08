var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

//getApi function is called when the fetchButton is clicked
fetchButton.addEventListener('click', getApi);

function getApi() {
  var requestUrl = 'https://api.github.com/users/sal1316/repos';//?per_page=5';
  fetch(requestUrl)
    .then(function (response) { // get error or succes codes.
      return response.json();
    })
    .then(function (data) {
      //loops over the response and inserts the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        //Create a list element
        var listItem = document.createElement('li');

        //Set the text of the list element to the JSON response's .html_url property
        listItem.textContent = data[i].html_url;

        //Append the li element to the id associated with the ul element.
        repoList.appendChild(listItem);
      }
    });
}



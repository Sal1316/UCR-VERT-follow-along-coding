var container = document.getElementById('appendTo');

fetch('https://api.github.com/orgs/twitter/public_members')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Public Members: Raw data \n----------');
    console.log(data);
  });

fetch('https://api.github.com/orgs/twitter/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Repositories: Names only \n----------');
    var ulEl = document.createElement('ul');
   
    for (var i = 0; i < data.length; i++) {
      console.log(`${[i+1]} ${data[i].name}`);
      
      var liEl = document.createElement('li');
      var el = document.createTextNode(data[i].name); // Create a text node
      
      liEl.appendChild(el); // Append the text node to the list item
      ulEl.appendChild(liEl); // Append the list item to the unordered list
    }
    container.appendChild(ulEl); // after the array is done looping, append it the the "appendTo" container.
  });

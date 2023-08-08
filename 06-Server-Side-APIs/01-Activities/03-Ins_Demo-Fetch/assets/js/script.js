var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

  fetch(requestUrl)
    .then(function (response) { // retreives response object that has the 200 ok prop.
      return response.json(); // have to convert to json first.
    })
    .then(function (data) { // second .then is passed in the array of objects.
      console.log('data: ', data);

      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements: tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata 
        // to the tablerow The tablerow then gets appended to the tablebody
        tableData.append(link);
        createTableRow.append(tableData);
        tableBody.append(createTableRow);
      }
    });
}

fetchButton.addEventListener('click', getApi);



/* for tables, you have to append the data in multiple steps:
  1st you append link to <td>
  2nd you append the <td> to the <tr> 
  3rd you append the <tr> to the <tbody>



*/ 
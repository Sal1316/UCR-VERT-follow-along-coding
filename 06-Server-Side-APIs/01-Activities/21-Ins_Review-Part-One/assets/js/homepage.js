var userFormEl = document.querySelector("#user-form");
var languageButtonsEl = document.querySelector("#language-buttons");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

// Helper function expressions:
// 1
var formSubmitHandler = function (event) {
  event.preventDefault(); // bc its type submit and it refresshes once pressed.

  var username = nameInputEl.value.trim();
  // what does the trim() do? removes white space characters from start and the end of the given string.
  console.log("username:", username);
  if (username) {
    getUserRepos(username);

    repoContainerEl.textContent = ""; // clears the content after the 'get-user' button is clicked.
    nameInputEl.value = "";
  } else {
    alert("Please enter a Real GitHub username");
  }
};

// 2
var getUserRepos = function (user) {
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  fetch(apiUrl) // doesnt need a body bc theres no parameters for the body.
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayRepos(data, user);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to GitHub");
    });
};

// 3
var buttonClickHandler = function (event) {
  var language = event.target.getAttribute("data-language");

  if (language) {
    getFeaturedRepos(language);

    repoContainerEl.textContent = "";
  }
};

// 4
var getFeaturedRepos = function (language) {
  var apiUrl =
    "https://api.github.com/search/repositories?q=" +
    language +
    "+is:featured&sort=help-wanted-issues";

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayRepos(data.items, language);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
};

// 5
var displayRepos = function (repos, searchTerm) {
  if (repos.length === 0) {
    repoContainerEl.textContent = "No repositories found.";
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  for (var i = 0; i < repos.length; i++) {
    var repoName = repos[i].owner.login + "/" + repos[i].name;

    var repoEl = document.createElement("div");
    repoEl.classList = "list-item flex-row justify-space-between align-center";

    var titleEl = document.createElement("span");
    titleEl.textContent = repoName;

    repoEl.appendChild(titleEl);

    var statusEl = document.createElement("span");
    statusEl.classList = "flex-row align-center";

    if (repos[i].open_issues_count > 0) {
      statusEl.innerHTML =
        "<i class='fas fa-times status-icon icon-danger'></i>" +
        repos[i].open_issues_count +
        " issue(s)";
    } else {
      statusEl.innerHTML =
        "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl);
  }
};

userFormEl.addEventListener("submit", formSubmitHandler);
languageButtonsEl.addEventListener("click", buttonClickHandler);

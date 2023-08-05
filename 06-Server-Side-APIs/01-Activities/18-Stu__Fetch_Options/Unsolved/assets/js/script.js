fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {

  cache: "reload", // *default, no-cache, reload, force-cache, only-if-cached

})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

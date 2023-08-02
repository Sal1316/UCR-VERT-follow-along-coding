fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json(); // need to have the return here so we can use the next .then to get the response data.
  })
  .then(function (data) {
    console.log(data);
  });

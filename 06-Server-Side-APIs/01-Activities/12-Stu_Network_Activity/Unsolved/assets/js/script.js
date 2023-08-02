requestUrl = 'https://api.github.com/orgs/nodejs/repos';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


/*
When using live server you get 304 codes that should be 200. To fix right click the refrec icon, and empty cash and hard reload
 
 
 
 
 
*/ 
fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


  
/* Parameter explanation.
per_page=10 > number of result per page.

query strin parameters: 
  state=open >
  sort=created > The property to sort the results by. Default: created. Can be one of: created, updated, pushed, full_name
  direction=desc > decending or accending order. 














*/
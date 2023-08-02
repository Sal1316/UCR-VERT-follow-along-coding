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
per_page=10 > the number of number of result per page.
state=open >
sort=created > 
direction=desc > decending or accending order. 














*/
var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {

  if (response.status === 404) { // redirects you to a different page in anything other than 200 range.
    location.replace(redirectUrl)
    // or location.href(redirectUrl) but not ideal.
  }

});

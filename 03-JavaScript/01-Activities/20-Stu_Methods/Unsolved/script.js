var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.unshift("Canis Major");
console.log('constellations are, ' + constellations);

planets.pop() 
console.log('planets ' + planets );

function concatArrays() {
      var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
      var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
      var galaxy = constellations.concat(planets);
      
      return galaxy;
}
console.log('Joined arrays: '+ concatArrays());

var capString = star.toUpperCase();
console.log('Uppercase string is ' + capString);


// calling a function without parentheis:
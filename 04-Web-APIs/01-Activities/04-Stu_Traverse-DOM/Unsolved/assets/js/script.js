

// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
articlesDiv.children[0].children[1].style.fontSize = "50px";
headerDiv.children[0].style.color = 'white';


// Not part of the assignment. 
// can you keep indesing the getelelmentbyId like we do in css. Ex, btnContainer button {}

document.getElementById("button").addEventListener("click", changeColor);

function changeColor() {
      document.getElementById("button").innerHTML = "Danger! Dont Press!";
      document.getElementById("button").style.backgroundColor = "red";
      document.getElementById("button").style.color = "yellow";     
}


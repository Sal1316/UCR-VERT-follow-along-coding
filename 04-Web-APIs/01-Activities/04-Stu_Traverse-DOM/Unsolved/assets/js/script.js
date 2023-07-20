
    // gets the element with the id of article. output = div element with children.
var articlesDiv = document.getElementById('articles');
    // gets the element with the id of header. output = header element with children.
var headerDiv = document.getElementById('header');

      // Change style by accessing style object's properties
articlesDiv.children[0].children[1].style.fontSize = "50px"; // changes child h3
headerDiv.children[0].style.color = 'white';  // changes h1
 
document.getElementById("button").addEventListener("click", changeColor);

function changeColor() {
      document.getElementById("button").innerHTML = "Danger! Dont Press!";
      document.getElementById("button").style.backgroundColor = "red";
      document.getElementById("button").style.color = "yellow";     
}


/*can you access children of elements as the argument. Ex, .btnContainer button? 
ans: Yes, it workss the same way, you just add the additional arguemnts in the quotes.*/
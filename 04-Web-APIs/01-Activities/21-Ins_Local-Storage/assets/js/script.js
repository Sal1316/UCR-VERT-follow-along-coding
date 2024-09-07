var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("name"); // local storage value 'count' will always be a string.

counter.textContent = count; // sets the elements text content to the value returned from count of local storage.

addButton.addEventListener("click", function () {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count); // not sure if this is actin like it reassignes the count
  }
});

subtractButton.addEventListener("click", function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

/* NOTES: 

- first the local storage is checked and the count is extracted.
- then the button is clicked, which checks the count value, 
- then it incrementes/decrements,
- then it is added to the text content of the div
- lastly, the count was saved in the local storage.



*/

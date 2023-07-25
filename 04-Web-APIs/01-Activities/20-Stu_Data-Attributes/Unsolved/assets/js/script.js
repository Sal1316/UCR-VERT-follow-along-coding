var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  console.log(element);

  if(element.classList.contains("box")) { // .classList.contains() checks for the class withing the element.
    var state = element.getAttribute("data-state") // returns either visible, or hidden.

    if(state ==="hidden") {
      var elemNum = element.dataset.number // gets the value of data-number.
      // var elemNum = element.getAttribute("data-number"); equivalent to the above line.
      console.log(elemNum)

      element.textContent = elemNum;
      element.setAttribute("data-state", "visible");
    } else {
      element.textContent = ''; // remove the number in front.
      element.setAttribute("data-state", "hidden");
    }

  }

});


var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  console.log(element);

  if(element.classList.contains("box")) {
    var state = element.getAttribute("data-state")

    if(state==="hidden") {
      var num = element.getAttribute("data-number");

      element.textContent = num;
      element.setAttribute("data-state", "visible");
    } else {
      element.textContent = '';
      element.setAttribute("data-state", "hidden");
    }

  }

});


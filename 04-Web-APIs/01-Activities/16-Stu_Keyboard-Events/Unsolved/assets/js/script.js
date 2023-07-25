
document.addEventListener("keyup", keyupAction);

document.addEventListener("keydown", keydownAction)

// TODO: Add Event Listener for "keydown" event
function keydownAction(event) {
  // TODO: Complete keydown function
  console.log(event);
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#key").innerHTML = event.key;
  document.querySelector("#code").innerHTML = event.keyCode;
}

function keyupAction() {
  // document.querySelector("#status").innerHTML = "KEYUP Event"; // both work but the appropriate one is .textContent
  document.querySelector("#status").textContent = "KEYUP Event";

}
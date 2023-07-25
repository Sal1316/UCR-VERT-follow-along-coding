var tipInputBox = document.querySelector("#tip-percentage");
var totalInputBox = document.querySelector("#total");
var submitBtn = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
  // parseFloat converts a string to a decial.
}

// fx adds tip and total to html
function addTip(event) {
  event.preventDefault();
  var tipPercentage = tipInputBox.value * .01;
  var total = totalInputBox.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.querySelector("#new-total").textContent = newTotal.toFixed(3);
}

submitBtn.addEventListener("click", addTip);

console.log("calculateTotal: ", calculateTotal(100, 15))
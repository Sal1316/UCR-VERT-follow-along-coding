// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
function justShout() {
  var shout = "Shout";
  console.log(shout + ", " + shout);
  return;
}

function shoutItAllOut() {
  var shout = "Shout";
  console.log(shout + " it all out! ");
  return;
}

justShout();
shoutItAllOut();


function sayLions() {
  var animal = "Lions"; 
  console.log(animal);
  return;
}

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayTigers() {
  var animal = "Tigers";
  console.log("and " + animal + " and "); 
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!". 
// var bears = "Bears";

function sayBears() {
    var bears = "Bears";
    console.log(bears + "! OH MY!");
    return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.
function singAlong() {
  // console.log(sing + ",");
  var singASong = function () {
    var sing = "Sing"; 
    console.log(sing + " a Song.");
  };
  singASong();
}

singAlong();

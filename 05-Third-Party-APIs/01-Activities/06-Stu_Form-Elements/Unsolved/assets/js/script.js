var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

/* TODO: Create a function to handle the form submission event that captures the 
form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`*/
function handleFormSubmission(event) {
      event.preventDefault();

      var userValue = $('#shopping-input').val(); // val() is a get
      var newLi = $("<li>").text(userValue);
      shoppingListEl.append(newLi);

      $('input[name="shopping-input"]').val(''); // val() is a set
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmission);
    

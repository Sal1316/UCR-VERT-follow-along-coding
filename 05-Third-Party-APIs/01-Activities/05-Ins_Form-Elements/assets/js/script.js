var formEl = $('#pizza-form');
var firstNameEl = $('input[name="first-name"]'); // [] are like additional filters. menas get me every input tage where the attruibute name is firstname.
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var githubEl = $('input[name="github"]');

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  console.log('First Name:', firstNameEl.val());  // .val() is the name of the element.
  console.log('Last Name:', lastNameEl.val());
  console.log('Email:', emailEl.val());
  console.log('GitHub:', githubEl.val());

  // Select all checked options
  var checkedEl = $('input:checked');
  var selected = [];

  // Loop through checked options to store in array
  
  $.each(checkedEl, function () {
    selected.push($(this).val()); // this means add "this" element
  });
  console.log('Toppings: ', selected.join(', '));

  // Clear input fields after refresh?
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  $('input[type="checkbox"]').prop('checked', false); // prop is used for attrubutes that dont have an '=' symbol
}

// Submit event on the form
formEl.on('submit', handleFormSubmit);

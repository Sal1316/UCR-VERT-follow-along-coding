var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');


// HOISTING: Declared function vs function expression. 
var handleFormSubmit = function (event) { 
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  // after it list the skill, the value are cleared from the input forms
  nameInputEl.val('');
  dateInputEl.val('');
};

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

// Add Autocomplete widget here
$(function () {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
  ];
  
  $("#skill-name").autocomplete({
    source: availableTags,
  });

});

// Add Datepicker widget here:CODE IS WORKING WITHOUT THIS FUNCTION?
$(function () {
  dateInputEl.datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

// Event Handlers: to avoid confussin, put event handlers at the tom ? 
formEl.on('submit', handleFormSubmit);
var typefaceEl = document.querySelector('#typeface');
var clearBtn = document.querySelector('#clear');
var h1El = document.querySelector('#h1');
var h2El = document.querySelector('#h2');
var h3El = document.querySelector('#h3');
var pEl = document.querySelector('#p');
var textAreaEl = document.querySelector('#textarea');

var divTag = document.createElement("p"); 
body.append(divTag);

var elements = [h1El, h2El, h3El, pEl];

var typeface;

 // changes the fontFamily on option change.
typefaceEl.addEventListener('change', function (event) {
  event.preventDefault();
  typeface = typefaceEl.value; // serif or monospace.
  document.querySelector('.container').style.fontFamily = typeface;
});

// Keydown event. What stores the value of the keydown? key.
textAreaEl.addEventListener('keydown', function (event) {
  // Access value of pressed key with key property
  var key = event.key.toLowerCase(); 
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
  );
  
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

clearBtn.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaEl.value = '';

  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});

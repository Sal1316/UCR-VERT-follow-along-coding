const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
// ans: Keeps track of the number of clicks
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  // ans: this fx keeps increments the count variable
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped.
    //ans: it seems like its being incremented here but scoped outside with the count = 0; 
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
  //  ans: this updated the click events in the button clicks.
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// ans: it seems like its populating an event listener to all the buttons.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}

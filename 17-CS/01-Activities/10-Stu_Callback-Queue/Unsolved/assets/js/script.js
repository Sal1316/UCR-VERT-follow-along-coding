// function to block the stack for x number of milliseconds
const pause = (milliSeconds) => {
  // get the current time
  var startTime = new Date().getTime();
  // block stack until time's up

  setTimeout(() => {
    
    console.log("hi");
  }, milliSeconds);
  
  while (new Date().getTime() < startTime + milliSeconds);
};

pause(8000);

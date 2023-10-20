// 1) Where is carNoise stored?
// globally
const carNoise = "Honk";
// 2) Where is goFast stored?
// in the variable
const goFast = (speed) => {
  // 4) When is speed assigned a value? Where is this value stored?
  // its value is assigned when the function is called. the value is stored in the goFast variable.

  // 5) Where is makeNoise stored?
  // it is stored in the scope of the makeNoise fx.
  const makeNoise = (sound) => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  };

  // 6) What happens in the following statement?
  // it logs the string with the variables speed and sound that was passed in
  makeNoise(carNoise);
};

// 3) What happens in the following statement?
// if you confirm the message, it will log the console in line 13
if (confirm("Do you want to go fast?")) {
  goFast(80);
}

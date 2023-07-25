// #region Data
// TODO: Which element is the following line of code selecting? // element wiht class of carouselbox
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following lines of code selecting? // element with class of next and prev
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];
// #endregion

// carousel.style.backgroundImage = "url('https://picsum.photos/300/200')"; does nothing right now.

function navigate(direction) {
  index = index + direction;  // 0 + 1 | -1
  if (index < 0) { // i belive that this cycles the images from the end to the first.
    index = images.length - 1; // index => 4-1 = 3
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url(" + currentImage + ")";
}

// once clicking on the image it will take you to a new tab of that image.
carousel.addEventListener("click", function(event) {
  event.stopPropagation();
  window.location.href = images[index]; //This line opens the image in a new tab when the carousel is clicked. The window.location.href property is used to change the URL of the current window to the URL of the image at the current index in the images array.
                        // source of the bug, should'nt it be current image?
});

// once next button is clicked, it executes navigate fx next image.
next.addEventListener("click", function(event) {
  
  event.stopPropagation(); // to stop the bubbling to carousel.

  navigate(1);
});

// once previos is clicked, it executes navigate fx previous image.
prev.addEventListener("click", function(event) {
  event.stopPropagation(); 
  navigate(-1);
});

navigate(0); // what does this do? is the first image when the page loads.?


// what makes clicking the image take you to a new tab.
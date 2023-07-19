var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");


site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com"); // the <a> tag
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below
var allH4 = document.querySelectorAll('h4');
/* also works but you have to index every object in the array.
allH4[0].setAttribute("style", "color:blue; font-size: 30px");
allH4[1].setAttribute("style", "color:blue; font-size: 30px");
allH4[2].setAttribute("style", "color:blue; font-size: 30px");
*/

for (var i = 0; i < allH4.length; i++) {
      allH4[i].setAttribute("style", "color:blue; font-size: 30px");
      console.log("Here are the results: " + allH4[i])
}

var paddTitle = document.body.children[0].setAttribute("style", "padding-left:10px; margin:0;");

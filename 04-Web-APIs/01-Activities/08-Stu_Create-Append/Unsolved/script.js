// create elements: 
var body = document.body;
// 
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// 
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// added context in memory, still have to append to elements.
h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

// items only exist in Js memory until they are appended to something that exist in the document.
body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
li1.textContent = "Cheesecake";
li2.textContent = "Pizza";
li3.textContent = "Dumpling";
li4.textContent = "Burger";

// appending li to the ol
listEl.appendChild(li1)
listEl.appendChild(li2)
listEl.appendChild(li3)
listEl.appendChild(li4)

listEl.setAttribute("style", "background-color: #333333; padding:20px;");
li1.setAttribute("style", "color: white; background-color:#666666; padding:5px; margin-left: 35px");
li2.setAttribute("style", "color: white; background-color:#777777; padding:5px; margin-left: 35px");
li3.setAttribute("style", "color: white; background-color:#888888; padding:5px; margin-left: 35px");
li4.setAttribute("style", "color: white; background-color:#999999; padding:5px; margin-left: 35px");


var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
listEl.appendChild(li1);
li1.textContent = "tuna";
listEl.appendChild(li2);
li2.textContent = "chicken";
listEl.appendChild(li3);
li3.textContent = "beef";
listEl.appendChild(li4);
li4.textContent = "vegetables";

// TODO: It's done when the ordered list has a background color of #333333 and padding of 20px.
listEl.style.backgroundColor = "#333333";
listEl.style.padding = "20px"

//TODO: It's done when each list item has a font color of white, padding of 5px, and margin-left of 35px.
//TODO: It's done when each list item has a different background color
li1.setAttribute("style", " color:white; background: red; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:white; background: blue; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: purple; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:white; background: green; padding: 5px; margin-left: 35px;");
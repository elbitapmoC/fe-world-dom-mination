const body = document.body;
// body.append("Appends", "Helloooo"); // Appends
// body.appendChild("Can only append elements"); // Error

// Use append
// Instead of appendChild
// TIP #1: -------------------------------------------- ^

// innerText vs textContent  --------------------------------------------
// const div = document.querySelector("div");
// console.log(div.textContent);
// console.log(div.innerText);
// What's the difference... innerText  vs textContent
// textContent - Displays everything, from indentation to hidden text.
// innerText - This takes into account the css. If text is hidden, it'll only log text that's showing up on the website.

// innerText is preferred
// TIP #2: -------------------------------------------- ^

// creating Elements  --------------------------------------------
emptyDiv = document.createElement("div");
emptyDiv.innerText = "Good Afternoon";
// emptyDiv.innerHTML = `<strong>Good Day</strong>`;
let strong = document.createElement("strong");
strong.innerText = "Good Day!";
body.append(strong);

// removing Elements  --------------------------------------------
let hi = document.getElementById("hi");
hi.remove();

// get & set Attributes
const spanBye = document.getElementById("bye");
spanBye.setAttribute("title", "Adios");
spanBye.getAttribute("title");
spanBye.removeAttribute("title");

const fight = document.getElementById("fight");
console.log(fight.dataset.enduring);
// TIP #3: Use camelCasing when naming custom attributes ---------- ^
fight.dataset.recentlyAdded = "09/22";
console.log(fight.dataset); // contains all the data for our custom attribute

// Modifying element classes. ---------------------------------------
let doFla = document.getElementById("flamingo");
doFla.classList.add("highlight");
console.log(doFla.firstElementChild.classList.remove("fire"));

// Toggle
let button = document.querySelector("button");
button.addEventListener("click", () => {
  doFla.firstElementChild.classList.toggle("fire");
});

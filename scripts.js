// Testing External JS link
console.log("Hi there! This is a test!");

// Targeting container div for later use
const container = document.querySelector(".container");

// Create a 16x16 grid of divs inside the "container" div
function gridMaker() {
    for (let i =0; i < 16; i++) {
        let newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
} 
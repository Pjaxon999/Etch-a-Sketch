// Testing External JS link
console.log("Hi there! This is a test!");

// Targeting container div for later use
const container = document.querySelector(".container");

// Disabling certain events globally to prevent problems with dragging and drawing
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
});
document.addEventListener('mousedown', (e) => {
    e.preventDefault();
});
document.addEventListener('mousemove', (e) => {
    if (e.buttons == 1) {
        e.preventDefault();
    }
});
document.addEventListener('mmouseup', (e) => {
    e.preventDefault();
});
window.addEventListener('selectstart', (e) => {
    e.preventDefault
});

// Track mouse being held down 
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// Set variables for user requested grid
let gridArea = 256;
let gridAreaPercentage = 6.25;

// function for button to change grid area
function newArea() {
    let userArea = prompt("How many squares per side would you like in your new canvas? 1-100 please!");
    userArea = userArea.trim();
    userArea = parseInt(userArea);
    if (userArea === null || userArea < 1 || userArea > 100 || !Number.isInteger(userArea)|| !Number.isFinite(userArea) || isNaN(userArea)) {
        alert("Something went wrong. Try again with a number between 1-100");
    } else {
        gridArea = userArea * userArea;
        gridAreaPercentage = 100 / userArea;
        console.log(gridAreaPercentage)
        clear();
        gridMaker();
    }
};

// Create a grid of divs inside the "container" div
function gridMaker() {
    for (let i = 0; i < gridArea; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("style", `background-color: #D9D9D9; flex: 0 0 ${gridAreaPercentage}%`);
        newDiv.setAttribute("class", "canvas")
        newDiv.addEventListener('mouseover', draw);
        newDiv.addEventListener('mousedown', draw);
        container.appendChild(newDiv);
    }
}; 

// Main drawing logic
function draw(e) {
    let drawDiv = e.currentTarget; 
    if (mouseDown == true || e.type == "mousedown") {
        drawDiv.style.backgroundColor = "black";
    }
};

// Clears canvas before creating a new one
function clear() {
    container.innerHTML = '';
};

// Clears canvas but maintains current div size
function shake() {
    let canvasArea = document.querySelectorAll(".canvas");
    canvasArea.forEach(div => {
        div.style.backgroundColor = "#D9D9D9";
    });
};

gridMaker();
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

// Create a 16x16 grid of divs inside the "container" div
function gridMaker() {
    for (let i =0; i < 256; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("style", "background-color: #D9D9D9; flex: 0 0 6.25%");
        newDiv.addEventListener('mouseover', draw);
        newDiv.addEventListener('mousedown', draw);
        container.appendChild(newDiv);
    }
} 

function draw(e) {
    let drawDiv = e.currentTarget; 
    if (mouseDown == true) {
        drawDiv.style.backgroundColor = "black";
    } else if (e.type == "mousedown") {
        drawDiv.style.backgroundColor = "black";
    }

}


gridMaker();
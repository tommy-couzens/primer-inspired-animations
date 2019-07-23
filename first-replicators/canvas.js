// Define canvas object
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set canvas to size of the screen
canvas.width = window.innerWidth - 50
canvas.height = window.innerHeight -50

// Give the canvas a border and make it nice and blue

function wipeScreen() {
    canvas.style.border = "10px solid";
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
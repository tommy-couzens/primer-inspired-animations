// Define canvas object
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set canvas to size of the screen
canvas.width = window.innerWidth - 50
canvas.height = window.innerHeight -50

// Give the canvas a border
canvas.style.border = "10px solid";

map = {}
// map.width = canvas.width/2 -50;
map.width = canvas.width;
map.height = canvas.height;

function wipeScreen() {
    ctx.fillStyle = "lightblue";
    // ctx.fillRect(0, 0, map.width, map.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawDividerLine() {
    line(map.width, 0, map.width, map.height, "black", 10);
}
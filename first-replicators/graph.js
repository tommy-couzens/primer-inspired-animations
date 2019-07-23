graph = {}

graph.width = window.innerWidth/2 - 50
graph.height = window.innerHeight - 50

graph.draw = function() {

    // draw the background
    square(map.width + 50, 50, canvas.width - 50, canvas.height - 50, "lightgreen");

    // draw the axis
    line(map.width + 100, 100, map.width + 100, canvas.height - 100)
    line(map.width + 100, canvas.height - 100, canvas.width - 100, canvas.height - 100)

    // label the axis
    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Creatures", map.width + 80, 80);
    ctx.fillText("Time", canvas.width - 100, canvas.height - 100);
}



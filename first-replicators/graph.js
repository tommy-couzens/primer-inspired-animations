graph = {}

graph.width = window.innerWidth/2 - 50
graph.height = window.innerHeight - 50

graph.zeroX = map.width + 100;
graph.zeroY = canvas.height - 100;

graph.increment = 8

graph.draw = function() {

    // draw the background
    square(map.width + 50, 50, canvas.width - 50, canvas.height - 50, "lightgreen");

    // draw the axis
    line(graph.zeroX, 100, graph.zeroX, graph.zeroY)
    line(graph.zeroX, graph.zeroY, canvas.width - 100, graph.zeroY)

    // label the axis
    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Creatures", map.width + 80, 80);
    ctx.fillText("Time", canvas.width - 100, graph.zeroY);

    // number the axis
    for (let i = 0; i < (graph.zeroY - 100)/graph.increment; i += 5 ){
        ctx.fillText(i, graph.zeroX - 20, graph.zeroY - graph.increment*i)
    }
}

graph.drawLine = function(array, colour, startX, startY, increment) {
    for (i = 0; i < array.length -1; i++) {
        const x1 = startX + i*increment
        const y1 = startY - array[i]*increment
        const x2 = startX + (i + 1)*increment
        const y2 = startY - array[i + 1]*increment
        line(x1, y1, x2, y2, colour);
    }
}
graph = {}

graph.width = window.innerWidth/2 - 50
graph.height = window.innerHeight - 50

graph.zeroX = map.width + 100;
graph.zeroY = canvas.height - 100;

graph.maxX = canvas.width - 100
graph.maxY = 100

graph.incrementX = 2
graph.incrementY = 4


graph.draw = function() {

    // draw the background
    square(map.width + 50, 50, canvas.width - 50, canvas.height - 50, "lightgreen");

    // draw the axis
    line(graph.zeroX, graph.maxY, graph.zeroX, graph.zeroY)
    line(graph.zeroX, graph.zeroY, graph.maxX, graph.zeroY)

    // label the axis
    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Creatures", map.width + 80, 80);
    ctx.fillText("Time", graph.maxX, graph.zeroY);

    // number the axis
    for (let i = 0; i < (graph.zeroY - 100)/graph.incrementY; i += 5 ){
        ctx.fillText(i, graph.zeroX - 20, graph.zeroY - graph.incrementY*i)
    }
}

graph.scaleDown = function() {
    graph.incrementX *= 0.95
    graph.incrementY *= 0.95
    graph.wipe()
    graph.draw()
}

graph.wipe = function() {
    square(graph.zeroX, graph.zeroY, graph.maxX, graph.maxY, "lightgreen");
}

graph.drawLine = function(array, colour, startX, startY, incrementX, incrementY) {
    for (i = 0; i < array.length -1; i++) {
        const x1 = startX + i*incrementX
        const y1 = startY - array[i]*incrementY
        const x2 = startX + (i + 1)*incrementX
        const y2 = startY - array[i + 1]*incrementY
        line(x1, y1, x2, y2, colour);
    }
}
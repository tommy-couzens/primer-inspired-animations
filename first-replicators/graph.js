graph = {}

graph.width = window.innerWidth/2 - 50
graph.height = window.innerHeight - 50

graph.zeroX = map.width + 100;
graph.zeroY = canvas.height - 100;

graph.maxX = canvas.width - 100
graph.maxY = 100

graph.incrementX = 2
graph.incrementY = 8

graph.maxCreatures = 50
graph.maxEpochs = 400


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
    ctx.fillText("Epoch", graph.maxX, graph.zeroY);

    const number_of_increments = 10
    // number the axis
    for (let i = 0; i <= number_of_increments; i++ ){
        ctx.fillText(Math.round(graph.maxCreatures*i/number_of_increments), graph.zeroX - 25, graph.zeroY + i*(graph.maxY - graph.zeroY)/number_of_increments)
    }

    for (let i = 0; i <= number_of_increments; i++ ){
        ctx.fillText(Math.round(graph.maxEpochs*i/number_of_increments), graph.zeroX + i*(graph.maxX - graph.zeroX)/10, graph.zeroY + 25)
    }
}

graph.scaleDown = function(direction) {
    if (direction == 'X' ) {
        graph.incrementX *= 0.80
        graph.maxEpochs /= 0.80
    }
    if (direction == 'Y') {
        graph.incrementY *= 0.80;
        graph.maxCreatures /= 0.80;
    }
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
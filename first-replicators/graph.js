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

graph.previousBlueX = graph.zeroX;
graph.previousBlueY = graph.zeroY;

graph.previousGreenX = graph.zeroX;
graph.previousGreenY = graph.zeroY;

graph.previousRedX = graph.zeroX;
graph.previousRedY = graph.zeroY;

graph.drawLine = function (creatureArray, colour) {

    newX = graph.zeroX + State.epoch*graph.increment,
    newY = graph.zeroY - creatureArray.length*graph.increment

    if (colour == "blue") {
        line(graph.previousBlueX, graph.previousBlueY, newX, newY, "blue");
        graph.previousBlueX = newX
        graph.previousBlueY = newY
    } else if ( colour == "green") {
        line(graph.previousGreenX, graph.previousGreenY, newX, newY, "green");
        graph.previousGreenX = newX
        graph.previousGreenY = newY
    } else if (colour == "red") {
        line(graph.previousRedX, graph.previousRedY, newX, newY, "Red");
        graph.previousRedX = newX
        graph.previousRedY = newY
    }
}



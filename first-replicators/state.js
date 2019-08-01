let State = {}

State.creatures = {
    blue: [],
    green: [],
    red: []
}

State.runningTotals = {
    blue: [0],
    green: [0],
    red: [0]
}

State.epoch = 0

for (const [key, value] of Object.entries(State.runningTotals)) {
    console.log(key, value);
}

State.drawEpoch = function() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Epoch: " + State.epoch, map.width - 250, 50);
    ctx.fillText("Creatures: " + State.creatures["blue"].length, map.width - 250, 100);
}

State.nextEpoch = function () {
    this.epoch += 1;
    let x = 25 + Math.random()*(map.width - 50);
    let y = 25 + Math.random()*(map.height - 50);
    
    this.newBlueCreature(x, y);
    // this.replicateCreatures();
    this.mutateCreatures();
    this.killCreatures();

    State.runningTotals["blue"].push(State.creatures["blue"].length)
    State.runningTotals["green"].push(State.creatures["green"].length)
    State.runningTotals["red"].push(State.creatures["red"].length)

    // for (const [key, value] of Object.entries(State.runningTotals)) {
    //     State.runningTotals[key].push(State.creatures[key].length)
    // }
    // console.log(State.runningTotals['blue'])


    // graph.drawLine(State.creatures["blue"], "blue");
    // graph.drawLine(State.creatures["green"], "green");
    // graph.drawLine(State.creatures["red"], "red");
}

State.newBlueCreature = function (x, y, vx, vy, size ) {
    State.creatures["blue"].push(new blueCreature(x, y, vx, vy, size));
}

State.newGreenCreature = function (x, y, vx, vy, size ) {
    State.creatures["green"].push(new greenCreature(x, y, vx, vy, size));
}
State.newRedCreature = function (x, y, vx, vy, size ) {
    State.creatures["red"].push(new RedCreature(x, y, vx, vy, size));
}

State.newBlueCreature(100,100);

State.replicateCreatures = function() {
    for (const [key, value] of Object.entries(State.creatures)) {
        value.forEach(creature => {
            if (Math.random() < creature.replicationRate) {
                creature.replicate();
            }
        })
    }

}

State.mutateCreatures = function() {
    State.creatures["blue"].forEach(creature => {
        if (Math.random() < creature.mutationRate){
            creature.mutate();
        } else if (Math.random() < creature.redMutationRate) {
            creature.mutateRed();
        }
    });
}

State.killCreatures = function() {
    for (let i = 0; i < this.creatures.length; i++) {
        creature = this.creatures[i];
        if (Math.random() < creature.deathRate) {
            this.creatures.splice(i,1);
        }
    }
}
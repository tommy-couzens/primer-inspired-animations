let State = {}

State.creatures = []
State.greencreatures = []
State.epoch = 0

State.drawEpoch = function() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Epoch: " + State.epoch, map.width - 250, 50);
    ctx.fillText("Creatures: " + State.creatures.length, map.width - 250, 100);
    graph.drawLine();
}

State.nextEpoch = function () {
    this.epoch += 1;
    let x = 25 + Math.random()*(map.width - 50);
    let y = 25 + Math.random()*(map.height - 50);
    this.newBlueCreature(x, y);
    this.replicateCreatures();
    this.mutateCreatures();
    this.killCreatures();
}

State.newBlueCreature = function (x, y, vx, vy, size ) {
    State.creatures.push(new blueCreature(x, y, vx, vy, size));
}

State.newGreenCreature = function (x, y, vx, vy, size ) {
    State.creatures.push(new greenCreature(x, y, vx, vy, size));
}
State.newRedCreature = function (x, y, vx, vy, size ) {
    State.creatures.push(new RedCreature(x, y, vx, vy, size));
}

State.newBlueCreature(100,100);

State.replicateCreatures = function() {
    State.creatures.forEach(creature => {
        if (Math.random() < creature.replicationRate) {
            creature.replicate();
        }
    });
}

State.mutateCreatures = function() {
    State.creatures.forEach(creature => {
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
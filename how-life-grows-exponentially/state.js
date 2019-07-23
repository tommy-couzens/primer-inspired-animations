let State = {}

State.creatures = []
State.epoch = 0

State.drawEpoch = function() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Epoch: " + State.epoch, canvas.width - 250, 50);
    ctx.fillText("Creatures: " + State.creatures.length, canvas.width - 250, 100);
}

State.nextEpoch = function () {
    this.epoch += 1;
    let x = 25 + Math.random()*(canvas.width - 50);
    let y = 25 + Math.random()*(canvas.height - 50);
    // this.newCreature(x, y);
    this.replicateCreatures();
    // this.killCreatures();
}

State.newCreature = function (x, y, vx, vy, size ) {
    State.creatures.push(new blueCreature(x, y, vx, vy, size));
}

State.newCreature(100,100);

State.replicateCreatures = function() {
    State.creatures.forEach(creature => {
        if (Math.random() < creature.replicationRate) {
            creature.replicate();
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
let State = {}

State.creatures = {
    blue: [],
    green: [],
    red: [],
    orange: []
}

State.runningTotals = {
    blue: [0],
    green: [0],
    red: [0],
    orange: [0]
}

State.epoch = 0

State.drawEpoch = function() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Epoch: " + State.epoch, map.width - 250, 50);
    // ctx.fillText("Creatures: " + State.creatures["blue"].length, map.width - 250, 100);
}

State.nextEpoch = function () {
    this.epoch += 1;
    let x = 25 + Math.random()*(map.width - 50);
    let y = 25 + Math.random()*(map.height - 50);
    State.creatures["blue"].push(new BlueCreature(x, y));

    this.replicateCreatures();
    this.killCreatures();

    for (const colour of Object.keys(State.creatures)) {
        State.runningTotals[colour].push(State.creatures[colour].length)
    }
}

State.replicateCreatures = function() {
    for (const array of Object.values(State.creatures)) {
        array.forEach(creature => {
            if (Math.random() < creature.replicationRate) {
                const random = Math.random() 
                if (random < creature.mutationRate) {
                    creature.mutate();
                } else if ( random < creature.mutationRate + creature.redMutationRate ) {
                    creature.mutateRed();
                } else if ( random < creature.mutationRate + creature.redMutationRate + creature.orangeMutationRate) {
                    creature.mutateOrange();
                } else {
                    creature.replicate();
                }
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
    for (const array of Object.values(State.creatures)) {
        for (let i = 0; i < array.length; i ++) {
            creature = array[i]
            if (Math.random() < creature.deathRate) {
                array.splice(i, 1);
            }
        }
    }
}
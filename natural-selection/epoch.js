let State = {}

State.epoch = 0

State.nextEpoch = function () {
    this.epoch += 1;
}

class Epoch {
    constructor(creatures, food) {
        this.creatures = creatures
        this.food = food
    }
}

const createReplicants = (replicantWorthy) => {
    let replicants = []
    replicantWorthy.forEach(creature => {
        replicants.push(new Creature(creature.position.plus(new Vector(creature.size, -creature.size)), creature.velocity.mul(-1), creature.speed, creature.size, creature.sense))
    })
    return replicants
}

function nextEpoch(epoch, epochArray) {
    console.log(epoch.creatures)
    let worthyCreatures = epoch.creatures.filter(creature => creature.foodEaten >= 1)
    let replicants = createReplicants(epoch.creatures.filter(creature => creature.foodEaten >= 2))
    let nextGen = worthyCreatures.concat(replicants)

    nextGen.forEach(function(creature) {
        creature.energy = 100
        creature.foodEaten = 0  
    })

    epochArray.push(new Epoch(nextGen, generateFood(100)))
    // epochArray.push(new Epoch(worthyCreatures, generateFood(100)))
}
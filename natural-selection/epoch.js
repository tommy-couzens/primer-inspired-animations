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
        replicants.push(new Creature(creature.position, creature.velocity.mul(-1), creature.speed, creature.size, creature.sense))
    })
    return replicants
}

function nextEpoch(epoch, epochArray) {
    let worthyCreatures = epoch.creatures.filter(creature => creature.foodEaten >= 1)
    let replicantWorthy = epoch.creatures.filter(creature => creature.foodEaten >= 2)
    worthyCreatures.forEach(function(creature) {
        creature.energy = 100
        creature.foodEaten = 0  
    })
    console.log(worthyCreatures)
    
    console.log(replicantWorthy)
    let replicants = createReplicants(replicantWorthy)
    replicants.forEach(function(creature) {
        creature.energy = 100
        creature.foodEaten = 0
    })
    console.log(replicants)

    epochArray.push(new Epoch(worthyCreatures.concat(replicants), generateFood(100)))
}
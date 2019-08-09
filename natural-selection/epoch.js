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

const posOrNeg = function() {
    if (Math.random() > 0.5) {
        return 1
    } else {
        return -1
    }
}

function nextEpoch(epoch, epochArray) {
    let worthyCreatures = epoch.creatures.filter(creature => creature.foodEaten >= 1)
    let replicants = createReplicants(worthyCreatures.filter(creature => creature.foodEaten >= 2))

    // mutate
    replicants.forEach(function(replicant) {
        if (Math.random() < 0.66 ) {
            replicant.speed += 0.20*posOrNeg()
        }
        // } else if (true) {
        //     replicant.sense += 10*posOrNeg()
        // }
    })
    let nextGen = worthyCreatures.concat(replicants)

    nextGen.forEach(function(creature) {
        creature.energy = 100
        creature.foodEaten = 0  
    })
    epochArray.push(new Epoch(nextGen, generateFood(100)))
}
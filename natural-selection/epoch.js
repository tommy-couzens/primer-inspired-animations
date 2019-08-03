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

function nextEpoch(epoch, epochArray) {
    let worthyCreatures = epoch.creatures.filter(creature => creature.foodEaten > 0)
    worthyCreatures.forEach(function(creature) {
        creature.energy = 100
        creature.foodEaten = 0
    })
    console.log(worthyCreatures)

    const foodArray = epoch.food
    foodArray.forEach(food => {
        this.eaten = false
    })
    epochArray.push(new Epoch(worthyCreatures, foodArray))
}
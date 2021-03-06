class Food {
    constructor(position, energy = 100) {
        this.position = position
        this.size = 2
        this.energy = energy
        this.growthRate = 0.10
        this.eaten = false
        this.replicationTimer = 0
    }
    draw() {
        if (this.energy < 0) this.energy = 0
        circle(this.position.x, this.position.y, this.size*this.energy/100, "red");
    }

   replicate(foodArray, energy = 50) {
    let x = this.position.x + 50 - Math.random()*100
    let y = this.position.y + 50 - Math.random()*100
    if (x < 0) x = this.size
    if (y < 0) y = this.size
    if (x > map.width) x = map.width - this.size
    if (y > map.height) y = map.height - this.size
    foodArray.push(new Food(new Vector(x, y), energy))
  }
}

const generateFood = (number) => {
    let foodArray = []
    for (let i = 0; i < number; i ++) {
        const x = 10 + (map.width - 20)*Math.random()  // min + (max - min)*i
        const y = 100 + (map.height - 200)*Math.random()
        foodArray.push(new Food(new Vector(x, y)))
    }
    return foodArray
}

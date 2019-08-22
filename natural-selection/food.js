class Food {
    constructor(position) {
        this.position = position
        this.size = 5
	this.energy = 100
        this.eaten = false
    }
    draw() {
        circle(this.position.x, this.position.y, this.energy/20, "red");
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

class Food {
    constructor(position) {
        this.position = position
        this.size = 5
        this.eaten = false
    }
    draw() {
        circle(this.position.x, this.position.y, 5, "red");
    }
}

const generateFood = (number) => {
    let foodArray = []
    for (let i = 0; i < number; i ++) {
        const x = 10 + (canvas.width - 20)*Math.random()  // min + (max - min)*i
        const y = 100 + (canvas.height - 200)*Math.random()
        foodArray.push(new Food(new Vector(x, y)))
    }
    return foodArray
}
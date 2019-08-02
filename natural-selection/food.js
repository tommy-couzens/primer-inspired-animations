class Food {
    constructor(position) {
        this.position = position
        this.size = 5
    }
    draw() {
        circle(this.position.x, this.position.y, 5, "red");
    }
}
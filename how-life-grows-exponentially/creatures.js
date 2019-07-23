class Creature {
    constructor(x, y, size=25) {
        this.x = x;
        this.y = y;
        this.vx = 2*(0.5 - Math.random());
        this.vy = 2*(0.5 - Math.random());
        this.size = size;
    }
    move() {
        // change direction at boundaries
        // if (this.x + this.size > canvas.width || this.x - this.size < canvas.width) {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.vx *= -1
            console.log("CHANGING")
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        // if (this.y + this.size > canvas.height) {
            this.vy *= -1
            console.log("CHANGING")
        }
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
        circle(this.x, this.y, this.size)
    }
}

c1 = new Creature(200, 200);
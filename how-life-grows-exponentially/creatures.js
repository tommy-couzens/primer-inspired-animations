class Creature {
    constructor(x, y, vx = 2*(0.5 - Math.random()), vy = 2*(0.5 - Math.random()), size=25) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
    }
    move() {
        // change direction at boundaries
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.vx *= -1
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.vy *= -1
        }

        // move
        this.x += this.vx;
        this.y += this.vy;
    }

    replicate() {
        State.newCreature(this.x, this.y, -this.vx, -this.vy, this.size);
    }

    draw() {
        circle(this.x, this.y, this.size, this.colour);
    }
}

class blueCreature extends Creature {
    constructor(x, y, vx, vy, size = 25) {
        super(x, y, vx, vy, size)
        this.colour = "blue"
        this.deathRate = 0.10;
        this.replicationRate = 1;
        this.mutationRate = 0.10;
    }
}

class greenCreature extends Creature {
    constructor(x, y, size = 25) {
        super(x, y, size)
        this.colour = "green"
        this.deathRate = 0.10;
        this.replicationRate = 0.05;
    }
}
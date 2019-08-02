class Creature {
    constructor(position, velocity, speed = 1, size = 1, sense = 1) {
        this.position = position
        this.velocity = velocity

        this.energy = 100;

        this.speed = speed;
        this.size = size;
        this.sense = sense;

    }
    move() {
        // change direction at boundaries
        if (this.position.x + this.size*15 > map.width || this.position.x - this.size*15 < 0) {
            this.velocity.x *= -1
        }
        if (this.position.y + this.size*15 > map.height || this.position.y - this.size*15 < 0) {
            this.velocity.y *= -1
        }

        // move
        this.position.add(this.velocity)
    }
    draw() {
        circle(this.position.x, this.position.y, this.size*15, this.colour);
    }
}


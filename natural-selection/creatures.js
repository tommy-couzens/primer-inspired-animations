class Creature {
    constructor(position, velocity, speed = 1, size = 15, sense = 120) {
        this.position = position
        this.velocity = velocity.setToSpeed(speed)

        this.energy = 100;

        this.speed = speed;
        this.size = size;
        this.sense = sense;
    }

    move() {
        // change direction at boundaries
        if (this.position.x + this.size > map.width || this.position.x - this.size < 0) {
            this.velocity.x *= -1
        }
        if (this.position.y + this.size > map.height || this.position.y - this.size < 0) {
            this.velocity.y *= -1
        }

        // move
        this.position.add(this.velocity)
    }

    draw() {
        circle(this.position.x, this.position.y, this.size, this.colour);
    }

    detectFood(foodArray) {
        foodArray.forEach(food => {
            if (this.position.distanceTo(food.position) < this.sense) {
                this.velocity = this.position.directionTowards(food.position)
                this.velocity.setToSpeed(this.speed)
            }
        })
    }

    drawSense() {
        circle(this.position.x, this.position.y, this.sense, this.colour, false);
    }
}


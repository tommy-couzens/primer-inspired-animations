class Creature {
    constructor(position, velocity, speed = 1, size = 15, sense = 30) {
        this.position = position
        this.velocity = velocity.setToSpeed(speed)

        this.energy = 100;
        this.foodEaten = 0;

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
        this.energy -= (Math.pow(this.speed, 2) + this.sense/30)/20
    }

    draw() {
        circle(this.position.x, this.position.y, this.size, this.colour);
    }

    drawEnergy() {
        ctx.font = "10px Arial";
        ctx.fillStyle = "black";
        ctx.fillText( Math.floor(this.energy), this.position.x, this.position.y);
    }

    detectFood(foodArray) {
        if (foodArray.length > 0) {
            const distanceFromFood = (food) => {
                return this.position.distanceTo(food.position)
            }
            const closerFood = (food1, food2) => {
                if (Math.min(distanceFromFood(food1) < distanceFromFood(food2))) {
                    return food1;
                } else {
                    return food2;
                }
            }
            const closestFood = foodArray.reduce((a, b) => closerFood(a,b))

            if (distanceFromFood(closestFood) < this.size) {
                this.eatFood(closestFood)
            } else if (distanceFromFood(closestFood) < this.sense) {
                this.velocity = this.position.directionTowards(closestFood.position).setToSpeed(this.speed)
            }
        }
    }

    eatFood(food) {
        this.foodEaten += 1;
        food.eaten = true;
    }

    drawSense() {
        circle(this.position.x, this.position.y, this.sense, this.colour, false);
    }
}


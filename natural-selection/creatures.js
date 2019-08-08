class Creature {
    constructor(position, velocity, speed = 1, size = 15, sense = 45) {
        this.position = position
        this.speed = speed;
        this.velocity = velocity.setToSpeed(this.speed)

        this.size = size;
        this.sense = sense;
        this.sense = 45;

        this.energy = 100;
        this.foodEaten = 0;
    }

    move() {
        // change direction at boundaries
        if ( this.position.x + this.size + 5 > map.width && this.velocity.x > 0) {
            this.velocity.x *= -1
        }
        if ( this.position.x + this.velocity.x - this.size < 0 && this.velocity.x < 0 ) {
            this.velocity.x *= -1
        }
        if ( this.position.y + this.size > map.height && this.velocity.y > 0) {
            this.velocity.y *= -1
        } 
        if (this.position.y - this.size < 0 && this.velocity.y < 0) {
            this.velocity.y *= -1
        } 

        // move
        this.position.add(this.velocity.mul(GAMESPEED))
        this.energy -= GAMESPEED*( (Math.pow(this.speed, 2) + this.sense/30)/20)
    }

    draw() {
        circle(this.position.x, this.position.y, this.size, this.colour);
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
    drawEnergy() {
        ctx.font = "15px Arial";
        ctx.fillStyle = "black";
        ctx.fillText( Math.floor(this.energy), this.position.x -5, this.position.y);
    }
    
    drawFoodEaten() {
        ctx.font = "15px Arial";
        ctx.fillStyle = "black";
        ctx.fillText( this.foodEaten, this.position.x - 5, this.position.y + 10);
    }
    drawSpeed() {
        ctx.font = "15px Arial";
        ctx.fillStyle = "black";
        ctx.fillText( this.speed.toFixed(2), this.position.x - 5, this.position.y);
    }
    drawSense() {
        circle(this.position.x, this.position.y, this.sense, "rgba(0, 0, 255, 0.2)");
    }
}


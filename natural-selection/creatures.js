class Creature {
    constructor(position, velocity, speed = 1, size = 15, sense = size*3) {
        this.position = position
        this.speed = speed;
        this.velocity = velocity.setToSpeed(this.speed)

        this.size = size;
        this.sense = sense;

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
        this.energy -= (Math.pow(this.speed, 2) + (this.sense - 45)/45)/3
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
        // Try and do this in a declarative way, only use const instead of let!
        let speedUpgrades = Math.round(this.speed*5) -5
        let colour = null
        if (speedUpgrades > 0) {
            if (speedUpgrades > 4) {
                speedUpgrades -= 4
                colour = "yellow"
            } else {
                colour = "lightgreen"
            }
        } else if (speedUpgrades < 0) {
            speedUpgrades = Math.abs(speedUpgrades)
            if (speedUpgrades > 4 ) {
                speedUpgrades -= 4
                colour = "darkred"
            } else {
                colour = "red"
            }
        }
        for (let i = 0; i < speedUpgrades; i++) {
            arrow(this.position.x, this.position.y - this.size/2 + i*this.size/3, this.size/2, colour)
        }
        // for (let i = 0; i > speedUpgrades; i--) {
        //     arrow(this.position.x, this.position.y - this.size/2 - i*this.size/3, this.size/2, "red")
        // }
    }
    drawSense() {
        circle(this.position.x, this.position.y, this.sense, "rgba(0, 0, 255, 0.1)");
    }
}


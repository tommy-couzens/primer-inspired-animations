class Creature {
    constructor(position, velocity, speed = 1, size = 15, sense = size*3, energy = 100) {
        this.position = position
        this.speed = speed;
        this.velocity = velocity.setToSpeed(this.speed)
        this.eating = false

        this.size = size;
        this.sense = sense;

        this.energy = energy;
        this.foodEaten = 0;
        this.replicationTimer = 0;
    }

    move() {
        if ( !this.eating) {
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
            this.energy -= (Math.pow(this.speed, 3) + (this.sense - 45)/15)/3
        }
    }

    draw() {
        circle(this.position.x, this.position.y, this.size, rgb(0, (this.energy/100)*255, 0));
    }

   replicate(creaturesArray) {
     // temp method - is calling an outside array which is not good - maybe this should all be part of some creature creatures class
      this.energy -= 50
      const x = this.position.x + 25 // - Math.random()*100
      const y = this.position.y + 25 // - Math.random()*100
      creaturesArray.push(new Creature(new Vector(x, y), this.velocity.mul(-1), this.speed, this.size, this.sense, 50))
      this.replicationTimer = 600
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

            this.eating = false
            if (distanceFromFood(closestFood) < this.size) {
                this.eating = true
                this.eatFood(closestFood)
            } else if (distanceFromFood(closestFood) < this.sense) {
                this.velocity = this.position.directionTowards(closestFood.position).setToSpeed(this.speed)
            }
        }
    }

    eatFood(food) {
        // this.foodEaten++
        this.energy += 5
        food.energy -= 5
        if (food.energy < 20) {
            food.eaten = true;
        }
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
        const colour = (number) => {
            if (number > 0) {
                if (number > 4) {
                    number -= 4
                    return "yellow"
                } else {
                    return "lightgreen"
                }
            } else if (number < 0) {
                number = Math.abs(number)
                if (number > 4 ) {
                    number -= 4
                    return "darkred"
                } else {
                    return "red"
                }
            }
        }
        for (let i = 0; i < speedUpgrades; i++) {
            arrow(this.position.x, this.position.y - this.size/2 + i*this.size/3, this.size/2, colour(speedUpgrades))
        }
        // for (let i = 0; i > speedUpgrades; i--) {
        //     arrow(this.position.x, this.position.y - this.size/2 - i*this.size/3, this.size/2, "red")
        // }
    }
    drawSense() {
        circle(this.position.x, this.position.y, this.sense, "rgba(0, 0, 255, 0.1)");
    }
}


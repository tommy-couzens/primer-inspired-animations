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
        if (this.x + this.size > map.width || this.x - this.size < 0) {
            this.vx *= -1
        }
        if (this.y + this.size > map.height || this.y - this.size < 0) {
            this.vy *= -1
        }

        // move
        this.x += this.vx;
        this.y += this.vy;
    }

    die() {
        let index = State.creatures.blue.indexOf(this);
        State.creatures.blue.splice(index, 1);
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
        this.replicationRate = 0.05;
        // this.mutationRate = 0.10;
        // this.redMutationRate = 0.10;
        this.mutationRate = 1.0;
        this.redMutationRate = 0.0;

    }
    replicate() {
        State.newBlueCreature(this.x, this.y, -this.vx, -this.vy, this.size);
    }
    mutate() {
        State.newGreenCreature(this.x, this.y, this.vx, this.vy, this.size);
    }
    mutateRed() {
        State.newRedCreature(this.x, this.y, this.vx, this.vy, this.size);
        this.die();
    }
}

class greenCreature extends Creature {
    constructor(x, y, size = 25) {
        super(x, y, size)
        this.colour = "green"
        this.deathRate = 0.10;
        this.replicationRate = 0.05;
        this.mutationRate = 0;
        this.redMutationRate = 0;
    }
    replicate() {
        State.newGreenCreature(this.x, this.y, -this.vx, -this.vy, this.size);
    }
    mutate() {
    }
}

class RedCreature extends Creature {
    constructor(x, y, size = 25) {
        super(x, y, size)
        this.colour = "red"
        this.deathRate = 0.05;
        this.replicationRate = 0.05;
        this.mutationRate = 0;
        this.redMutationRate = 0;
    }
    replicate() {
        State.newRedCreature(this.x, this.y, -this.vx, -this.vy, this.size);
    }
    mutate() {
    }
}
let State = {}

State.creatures = []
State.epoch = 0

State.drawEpoch = function() {
    ctx.font = "30px Arial";
    ctx.fillText("Epoch: " + State.epoch, canvas.width - 250, 50);
}

State.nextEpoch = function () {
    this.epoch += 1;
    this.newCreature();
}

State.newCreature = function () {
    let x = 25 + Math.random()*(canvas.width - 50);
    let y = 25 + Math.random()*(canvas.height - 50);
    State.creatures.push(new Creature(x,y));
}
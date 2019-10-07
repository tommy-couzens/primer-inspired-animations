creaturesArray = generateCreatures()
foodArray = generateFood(50)

// Use this as a function
function setup() {}


function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}

const posOrNeg = function() {
    if (Math.random() > 0.5) {
        return 1
    } else {
        return -1
    }
}

var isRunning = false;
var speed = 1;

function togglePause() {
  // toggle the value of isRunning
  isRunning = !isRunning;

  // call animate() if working
  if (isRunning) {
    run();
  }
}

function increaseSpeed() {
    speed++
}

function reset() {
    // let creaturesArray = []
    // for (let x = 50; x < map.width; x+= 500) {
    //     creaturesArray.push(new Creature(new Vector(x, 50), new Vector(0, 1) ) )
    //     creaturesArray.push(new Creature(new Vector(x, map.height - 50), new Vector(0, -1) ) )
    // }
    creaturesArray = generateCreatures()
    foodArray = generateFood(50)
}

function run() {
	wipeScreen();

    for (let i = 0; i < speed; i++) {
        // Remove any dead creatures or food
        foodArray = foodArray.filter(food => !food.eaten)
        creaturesArray = creaturesArray.filter(creature => creature.energy > 0)

        if (drawGraph) {
            updateGraph(creaturesArray)
        }
        
        // I should actually measure time instead of doing math.random
        if (drawLineGraph && Math.random() < 0.02) {
            updateLineGraph(creaturesArray, foodArray)
            
        }
        // canvas.width-- // this is fun to do
        // map.width--
        creaturesArray.forEach(creature => {
            creature.replicationTimer-- // Should probably do this per second and not per frame
            if (creature.energy > 200 && creature.replicationTimer <= 0) {
            creature.replicate(creaturesArray)
            }
            creature.draw();
            // creature.drawSense();
            // creature.drawEnergy();	
            // creature.drawSpeed();
            // if (creature.energy < 300) creature.detectFood(foodArray);
            creature.detectFood(foodArray);
            creature.move();
        })
        // Generate a random food
        if (Math.random() < 0.02) {
            const x = 10 + (map.width - 20)*Math.random()  // min + (max - min)*i
            const y = 100 + (map.height - 200)*Math.random()
            foodArray.push(new Food(new Vector(x, y)))
        }

        // Say the creature count
        ctx.fillStyle = "black";
        ctx.fillText( "Creatures: " + creaturesArray.length, 150, 50);

        foodArray.forEach(food => {
            // food.replicate(foodArray)
            food.draw()
            if (food.energy > 150) {
                food.replicationTimer--
                if (food.replicationTimer <= 0) {
                    food.replicate(foodArray, 50)
                    food.replicationTimer = 1200
                }
            } else {
                food.energy += food.growthRate
            }
        })
    }
    if (isRunning) {
        requestAnimationFrame(run);
    }
}

// run()
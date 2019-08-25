function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
  }

creatures1 = []
for (let y = 50; y < map.height; y+= 100) {
	creatures1.push(new Creature(new Vector(500,y), new Vector(0, 1) ) )
	// creatures1.push(new Creature(new Vector(x, map.height - 50), new Vector(0, -1) ) )
}

let TOTAL = creatures1.length

let MARKER = 1000
line(MARKER, 0, MARKER, canvas.height)

const inputs = (creature) => {
    return [creature.position.x, creature.position.y]
}

const score = (creature) => {
    return MARKER - creature
}

let neat;
// function setup() {
neat = new NEAT([2, 2], TOTAL, .005, "tanh");
// }

for (let i = 0; i < TOTAL; i++) {
    neat.setInputs(inputs(creatures1[i]), i);
  }

neat.predict()

for (let i = 0; i < TOTAL; i++) {
    if (neat.desicion(i) === 1) {
        creatures1[i].velocity.x = 1
        creatures1[i].velocity.y = 0.1
      } else {
        creatures1[i].velocity.x = -1
        creatures1[i].velocity.y = 0.1
      }
  }

function setScore(creatures) {
    for (let i = 0; i < TOTAL; i++) {
        neat.setFitness(creatures[i].position.x - MARKER, i);
        console.log(creatures[i].position.x - MARKER)
      }
}

let count = 60
function run1() {

    for (const creature of creatures1) {
        // wipeScreen()
        creature.position.add(creature.velocity)
        creature.draw()
    }
    if (count <= 0) {
        console.log("hello")
        count = 60
        setScore(creatures1)
        neat.doGen()

        for (let i = 0; i < TOTAL; i++) {
            neat.setInputs(inputs(creatures1[i]), i);
          }
        neat.predict()

        for (let i = 0; i < TOTAL; i++) {
            if (neat.desicion(i) === 1) {
                creatures1[i].velocity.x = 1
                creatures1[i].velocity.y = 0
              } else {
                creatures1[i].velocity.x = -1
                creatures1[i].velocity.y = 0
              }
          }
    }
    count--
    requestAnimationFrame(run1);
}

run1()
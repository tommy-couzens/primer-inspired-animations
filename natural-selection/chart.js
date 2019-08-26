// Define canvas object
var speedCanvas = document.getElementById("speedChart");
var speedtx = speedCanvas.getContext("2d");

// Set canvas to left half the size of the screen
speedCanvas.width = window.innerWidth/2 
speedCanvas.height = window.innerHeight/2 -50
// speedCanvas.width = canvas.width*2
// speedCanvas.height = canvas.height

// one must be false
const drawGraph = true
const drawLineGraph = false


// Helper function to get creature data into the correct format
const countMap = (array) => {
	return new Map([...new Set(array)].map(x => [x, array.filter(y => y ==x).length]).sort())
}

function updateGraph(creatures) {
	const speeds = creatures.map(creature => creature.speed.toFixed(2))
	const speedMap = countMap(speeds)
	// console.log(speedMap)
	speedChart.data.labels = Array.from(speedMap.keys())
	speedChart.data.datasets[0].data = Array.from(speedMap.values())
	speedChart.update()

	const senses = creatures.map(creature => creature.sense.toFixed(2))
	const senseMap = countMap(senses)
	senseChart.data.labels = Array.from(senseMap.keys())
	senseChart.data.datasets[0].data = Array.from(senseMap.values())
	senseChart.update()
}
if (drawGraph) {
    var speedData1 = {
        labels: ["1.00"],
        datasets: [{
            label: 'Speed',
            backgroundColor: 'rgb(255, 255, 132)',
            borderColor: 'rgb(0, 0, 0)',
            data: [8]
        }]
    }
    var speedChart = new Chart(speedtx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: speedData1,

        // Configuration options go here
        options: {
            layout: {
                padding: {
                    left: canvas.width + 50,
                    right: 50,
                    top: 50,
                    bottom: canvas.height/2,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }); 
}

// Define canvas object
var senseCanvas = document.getElementById("senseChart");
var sensetx = senseCanvas.getContext("2d");

// Set canvas to left half the size of the screen
senseCanvas.width = window.innerWidth/2 - 50
senseCanvas.height = window.innerHeight/2 -50

if (drawGraph) {
    var senseData1 = {
        labels: ["1.00"],
        datasets: [{
            label: 'sense',
            backgroundColor: 'rgb(0, 0, 132)',
            borderColor: 'rgb(0, 0, 0)',
            data: [8]
        }]
    }
    var senseChart = new Chart(sensetx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: senseData1,

        // Configuration options go here
        options: {
            layout: {
                padding: {
                    left: canvas.width + 50,
                    right: 50,
                    top: canvas.height/2,
                    bottom: 50,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }); 
}



// Define canvas object
var populationGraph = document.getElementById("populationLineGraph");
var populationtx = populationGraph.getContext("2d");

// Set canvas to left half the size of the screen
populationGraph.width = window.innerWidth/2 
populationGraph.height = window.innerHeight/2 -50

function updateLineGraph(creatures, food) {
    populationChart.data.labels.push("1")
    populationChart.data.datasets[0].data.push( creatures.length)
    populationChart.data.datasets[1].data.push(food.length/2)
    populationChart.update()

}

if (drawLineGraph) {
    var populationData1 = {
        labels: [],
        datasets: [{
            label: 'population',
            // backgroundColor: 'rgb(255, 255, 132)',
            borderColor: 'rgb(0, 0, 0)',
            pointRadius: 0,
            // data: [2, 3, 5, 8, 1, 2, 1, 1, 1, 1, 7, 8, 9, 10]
            data: []
        },
        {
            label: 'food /2',
            // backgroundColor: 'rgb(0, 255, 132)',
            borderColor: 'rgb(255, 0, 0)',
            pointRadius: 0,
            // data: [2, 3, 5, 8, 1, 2, 1, 1, 1, 1, 7, 8, 9, 10]
            data: []
        }]
    }
    var populationChart = new Chart(populationtx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: populationData1,

        // Configuration options go here
        options: {
            layout: {
                padding: {
                    left: canvas.width + 50,
                    right: 50,
                    top: 50,
                    bottom: canvas.height/2,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }); 
}
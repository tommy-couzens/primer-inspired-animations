// Define canvas object
var speedCanvas = document.getElementById("speedChart");
var speedtx = speedCanvas.getContext("2d");

// Set canvas to left half the size of the screen
speedCanvas.width = window.innerWidth/2 
speedCanvas.height = window.innerHeight/2 -50
// speedCanvas.width = canvas.width*2
// speedCanvas.height = canvas.height

speedCanvas.style.border = "0px solid";

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

const speedData1 = {
    labels: ["1.00"],
    datasets: [{
        label: 'Speed',
        backgroundColor: 'rgb(255, 255, 132)',
        borderColor: 'rgb(0, 0, 0)',
        data: [8]
    }]
}
const speedChart = new Chart(speedtx, {
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

// Define canvas object
var senseCanvas = document.getElementById("senseChart");
var sensetx = senseCanvas.getContext("2d");

// Set canvas to left half the size of the screen
senseCanvas.width = window.innerWidth/2 - 50
senseCanvas.height = window.innerHeight/2 -50

senseCanvas.style.border = "0px solid";

const senseData1 = {
    labels: ["1.00"],
    datasets: [{
        label: 'sense',
        backgroundColor: 'rgb(0, 0, 132)',
        borderColor: 'rgb(0, 0, 0)',
        data: [8]
    }]
}
const senseChart = new Chart(sensetx, {
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

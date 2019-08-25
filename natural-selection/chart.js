// Define canvas object
var speedCanvas = document.getElementById("speedChart");
var speedtx = speedCanvas.getContext("2d");

// Set canvas to left half the size of the screen
speedCanvas.width = window.innerWidth/2 - 50
speedCanvas.height = window.innerHeight/2 -50

// const speedData1 = {
//     labels: ["1.00"],
//     datasets: [{
//         label: 'Speed',
//         backgroundColor: 'rgb(255, 255, 132)',
//         borderColor: 'rgb(0, 0, 0)',
//         data: [8]
//     }]
// }
// const speedChart = new Chart(speedtx, {
//     // The type of chart we want to create
//     type: 'bar',

//     // The data for our dataset
//     data: speedData1,

//     // Configuration options go here
//     options: {
//         layout: {
//             padding: {
//                 left: window.innerWidth/2,
//                 right: 0,
//                 top: 0,
//                 bottom: window.innerHeight/2,
//             }
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// }); 

// // Define canvas object
// var senseCanvas = document.getElementById("senseChart");
// var sensetx = senseCanvas.getContext("2d");

// // Set canvas to left half the size of the screen
// senseCanvas.width = window.innerWidth/2 - 50
// senseCanvas.height = window.innerHeight/2 -50

// const senseData1 = {
//     labels: ["1.00"],
//     datasets: [{
//         label: 'sense',
//         backgroundColor: 'rgb(0, 0, 132)',
//         borderColor: 'rgb(0, 0, 0)',
//         data: [8]
//     }]
// }
// const senseChart = new Chart(sensetx, {
//     // The type of chart we want to create
//     type: 'bar',

//     // The data for our dataset
//     data: senseData1,

//     // Configuration options go here
//     options: {
//         layout: {
//             padding: {
//                 left: window.innerWidth/2,
//                 right: 0,
//                 top: window.innerHeight/2,
//                 bottom: 0,
//             }
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// }); 

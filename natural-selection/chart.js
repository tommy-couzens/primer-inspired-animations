const speedData1 = {
    labels: ["1.00"],
    datasets: [{
        label: 'Speed',
        backgroundColor: 'rgb(255, 255, 132)',
        borderColor: 'rgb(0, 0, 0)',
        data: [8]
    }]
}
const speedChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: speedData1,

    // Configuration options go here
    options: {
        layout: {
            padding: {
                left: map.width,
                right: 50,
                top: 0,
                bottom: canvas.height/2
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

// // Define canvas object
// var senseCanvas = document.getElementById("senseChart");
// var sensetx = senseCanvas.getContext("2d");

// // Set canvas to left half the size of the screen
// senseCanvas.width = window.innerWidth - 50
// senseCanvas.height = window.innerHeight -50

// const senseData = {
//     labels: ['0', '0.2', '0.4', '0.6', '0.8', '1', '1.2', '1.4', '1.6', '1.8', '2.0', '2.2'],
//     datasets: [{
//         label: 'Sense',
//         backgroundColor: 'rgb(255, 255, 132)',
//         borderColor: 'rgb(0, 0, 0)',
//         data: [0, 0, 3, 4, 0, 8, 0, 0, 0, 0]
//     }]
// }

// const senseChart = new Chart(sensetx, {
//     // The type of chart we want to create
//     type: 'bar',

//     // The data for our dataset
//     data: senseData,

//     // Configuration options go here
//     options: {
//         layout: {
//             padding: {
//                 left: map.width,
//                 right: 50,
//                 top: 0,
//                 bottom: 0
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
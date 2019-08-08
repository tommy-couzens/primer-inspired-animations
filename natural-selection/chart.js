// make this function declarative rather than using forEach, do a filter and reduce instead?

const speedArray = function(creatures){
    let array =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    creatures.forEach(creature => {
        array[Math.round(creature.speed*5)]++
    })
    return array
}

const data = {
    labels: ['0', '0.2', '0.4', '0.6', '0.8', '1', '1.2', '1.4', '1.6', '1.8', '2.0'],
    datasets: [{
        label: 'Speed',
        backgroundColor: 'rgb(255, 255, 132)',
        borderColor: 'rgb(0, 0, 0)',
        data: [0, 0, 0, 0, 0, 8, 0, 0, 0, 0]
    }]
}
const myChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: data,

    // Configuration options go here
    options: {
        layout: {
            padding: {
                left: map.width,
                right: 50,
                top: 0,
                bottom: 0
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
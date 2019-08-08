let speedData = [0, 0, 0, 8, 0, 0, 0]


// make this function declarative rather than using forEach, do a filter and reduce instead?
const speedArray = function(creatures){
    let array =[0, 0, 0, 0, 0, 0, 0]
    creatures.forEach(creature => {
        array[Math.floor((creature.speed - 0.4)*5)]++
    })
    return array
}

const data = {
    labels: ['0.4', '0.6', '0.8', '1', '1.2', '1.4', '1.6'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: speedData
    }]
}
const myChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

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

speedData = [1, 8, 10, 4, 2, 3, 21]

myChart.update()
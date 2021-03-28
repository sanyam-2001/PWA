const makeChart = (data, label, ctx, title, color) => {
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: title,
                data: data,
                backgroundColor: [
                    color
                ],
                borderWidth: 1
            }]
        },
        options: {
            elements: {
                point: {
                    radius: 0
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
    myChart.aspectRatio = 0;

    return myChart;
}


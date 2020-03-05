new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: [0, .2, .4, .6, .8, 1],
        datasets: [{
                data: [6000, 2000, 5, 3607, 17, 1669],
                label: "Loopings",
                borderColor: "#0DF0A8",
                fill: false
      }
    ]
    },
    options: {
        title: {
            display: true,
            text: 'Amount of loopings per light year',
            fontColor: 'white',
        },
        legend: {
            display: false,
            labels: {
                fontColor: 'white',
                fontSize: 17,
                fontFamily: 'helvetica',
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: 'white',
                }
          }],
            yAxes: [{
                ticks: {
                    fontColor: 'white',
                }
          }]

        }

    }
});

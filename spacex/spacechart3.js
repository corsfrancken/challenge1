new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
        labels: ["Km"],
        datasets: [
            {
                label: "Progress",
                backgroundColor: ["#0DF0A8"],
                data: [2478, 5267, 734, 784, 433]
        }
      ]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Progress',
            fontColor: 'white',
        }
    }
});

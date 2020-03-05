new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Dead", "Scientist", "Doctor", "Cook"],
        datasets: [
            {
                label: "Population",
                backgroundColor: ["#D54545", "#0067A6", "#0DF0A8", "#8C3ECE"],
                data: [24, 52, 17, 7],
                fontColor: 'white',
        }
      ]
    },
    options: {
        title: {
            display: true,
            text: 'Amount = %',
            fontColor: 'white',
        }
    }
});

let ctx = document.getElementById('traffic-chart');

let trafficChart = new Chart(ctx, {
    type: 'line',
    data: {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    fill: true,
    lineTension: 0,
    backgroundColor: "rgba(226, 227, 246,.7)",
    borderColor: "rgba(101, 106, 187, 1)",
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: "rgba(101, 106, 187, 1)",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 2,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(189, 191, 234, 1)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 2,
    pointRadius: 5,
    pointHitRadius: 10,
    data: ["0", "500","1000", "750", "1250", "1750", "1250", "1500","1000","1500", "2000", "1500", "2000" ]
  }]
},
options: {
      legend: {
    	display: false
    },
  scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 0,
                    stepSize: 500
                }
            }]
        }}
});
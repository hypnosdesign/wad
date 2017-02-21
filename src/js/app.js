//get Traffic line Chart canvas
const ctx = document.getElementById('traffic-chart');
// get Daily traffic bar chart canvas
const dtc = document.getElementById('daily-traffic-chart');
// get Mobile Users pie Chart canvas
const muc = document.getElementById('mobile-users-chart');

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
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
            max: 2500,
            min: 0,
            stepSize: 500
        }
      }]
    }
  }
})

let dailyTrafficChart = new Chart(dtc, {
  type: 'bar',
  data: {
    labels: ["S","M","T","W","T","F","S"],
    datasets: [{
        backgroundColor: "rgba(101, 106, 187, 1)",
        data: ["50", "75", "150", "100", "200", "175","75"]

    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          max: 250,
          stepSize: 50
        }
      }]
    }
  }
})

let mobileUsersChart = new Chart(muc, {
  type: 'doughnut',
  data: {
    labels: ["Phones","Tablets","Desktop","Laptop","Others"],
    datasets: [{
        backgroundColor: "rgba(101, 106, 187, 1)",
        data: ["22", "30", "17", "29", "2"],
        backgroundColor: [
          "rgba(225, 74, 86,.8)",
          "rgba(247, 125, 8,.8)",
          "rgba(160, 185, 40,.8)",
          "rgba(68, 33, 71,.8)",
          "rgba(23, 152, 179,.8)"
        ],
        hoverBackgroundColor: [
          "rgba(225, 74, 86, 1)",
          "rgba(247, 125, 8, 1)",
          "rgba(160, 185, 40, 1)",
          "rgba(68, 33, 71, 1)",
          "rgba(23, 152, 179, 1)"
        ]

    }]
  },
  options: {
    legend: {
      display: true,
      position: "right",
      labels: {
        //fontSize: "10",
        usePointStyle: true,
      }
    }
  }
})
// add and remove class to menu
const menuTraffic = document.querySelectorAll('.menu-traffic p')
function addRemoveClass(event){
  event.preventDefault()
 	menuTraffic.forEach( element => element.classList.remove('active') )
  this.classList.add('active')
}
menuTraffic.forEach( elements => elements.addEventListener('click', addRemoveClass))



// Charts Deafault settings

Chart.defaults.global.maintainAspectRatio = false

//get Traffic line Chart canvas
const ctx = document.getElementById('traffic-chart');
// get Daily traffic bar chart canvas
const dtc = document.getElementById('daily-traffic-chart');
// get Mobile Users pie Chart canvas
const muc = document.getElementById('mobile-users-chart');

let hourly = [
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  [40,56,89,22,30,34,56,9,56,29,33,45,61,28,34,42,37,40,65,76,77,79,52,54]
];
let daily = [
  ["S","M","T","W","T","F","S"],
  ["50", "75", "150", "100", "200", "175","75"],
  {max: 500, min:0, stepSize: 100}
];
let weekly = [
  ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"], 
  ["0", "500","1000", "750", "1250", "1750", "1250", "1500","1000","1500", "2000", "1500", "2000" ],
  { max: 2500, min: 0, stepSize: 500 }
];
let monthly = [
  ["Jan", "Feb", "Mar", "Apr", "May", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"],
  [2000,4000,3000,2500,3500,2500,3000,2000,5000, 8000, 8500, 7000],
  {max: 10000, min: 0, stepSize: 1500}
];

var trafficChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: weekly[0],
    datasets: [{
      fill: true,
      lineTension: 0,
      backgroundColor: "rgba(226, 227, 246,.7)",
      borderColor: "rgba(101, 106, 187, 1)",
      borderCapStyle: 'butt',
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
      data: weekly[1]
  }]
},
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: weekly[2]
      }]
    }
  }
})
const hourlyP = document.getElementsByClassName('hourly')[0];
    hourlyP.addEventListener('click', function(){
    trafficChart.data.labels = hourly[0];
    trafficChart.data.datasets[0].data = hourly[1];
    trafficChart.options.scales.yAxes[0].ticks.max = 100
    trafficChart.options.scales.yAxes[0].ticks.min = 0
    trafficChart.options.scales.yAxes[0].ticks.stepSize = 20
    trafficChart.update()
})
const dailyP = document.getElementsByClassName('daily')[0];
    dailyP.addEventListener('click', function(){
    trafficChart.data.labels = daily[0];
    trafficChart.data.datasets[0].data = daily[1];
    trafficChart.options.scales.yAxes[0].ticks.max = 250
    trafficChart.options.scales.yAxes[0].ticks.min = 0
    trafficChart.options.scales.yAxes[0].ticks.stepSize = 100
    trafficChart.update()
})
const weeklyP = document.getElementsByClassName('weekly')[0];
weeklyP.addEventListener('click', () => {
trafficChart.data.labels = weekly[0];
    trafficChart.data.datasets[0].data = weekly[1];
    trafficChart.options.scales.yAxes[0].ticks.max = 2500
    trafficChart.options.scales.yAxes[0].ticks.min = 0
    trafficChart.options.scales.yAxes[0].ticks.stepSize = 500
    trafficChart.update()
});
const monthlyP = document.getElementsByClassName('monthly')[0];
monthlyP.addEventListener('click', () => {
trafficChart.data.labels = monthly[0];
    trafficChart.data.datasets[0].data = monthly[1];
    trafficChart.options.scales.yAxes[0].ticks.max = 10000
    trafficChart.options.scales.yAxes[0].ticks.min = 0
    trafficChart.options.scales.yAxes[0].ticks.stepSize = 1500
    trafficChart.update()
});



let dailyTrafficChart = new Chart(dtc, {
  type: 'bar',
  data: {
    labels: ["S","M","T","W","T","F","S"],
    datasets: [{
        backgroundColor: "rgba(101, 106, 187, 1)",
        data: ["50", "75", "150", "100", "200", "175","75"]
    },
    {
      backgroundColor: "rgba(101, 206, 187, 1)",
      data: ["90", "40", "100", "110", "180", "150","80"]
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
        usePointStyle: true
      }
    }
  }
})

/*------------------------------------------ 
  LOCAL STORAGE
------------------------------------------*/
const formSettings = document.getElementById('form-settings');
const emailNotification = document.getElementById('switch_1');
const profilePublic = document.getElementById('switch_2');
const timeZone = document.getElementById('select-timezone');


formSettings.addEventListener('submit', event => {
  const sets = [
    ['setEmail', emailNotification.checked],
    ['setProfile', profilePublic.checked],
    ['setTimezone', timeZone.value]
  ];

  event.preventDefault();
    for (let i = 0; i < sets.length; i++) {
      var setKey = sets[i][0];
      var setValue = sets[i][1];
      var local = localStorage.setItem(setKey, setValue)
    }
})

if(localStorage.setEmail === 'false'){
      emailNotification.checked = false
    } else {
      emailNotification.checked = true
    }
if(localStorage.setProfile === 'false'){
      profilePublic.checked = false
    } else {
      profilePublic.checked = true
    }

timeZone.value = localStorage.setTimezone

/*addEventListener(document, "touchstart", function(e) {
    console.log(e.defaultPrevented);  // will be false
    e.preventDefault();   // does nothing since the listener is passive
    console.log(e.defaultPrevented);  // still false
  }, Modernizr.passiveeventlisteners ? {passive: true} : false);*/


/*------------------------------------------ 
  SEARCH FOR USER VALIDATION
------------------------------------------*/

const formSearchUser = document.getElementById('searchForUserForm');
const inputSearchUser = document.getElementById('inputForUserForm');
const textAreaUserMessage = document.getElementById('textAreaForUserForm');


/*------------------------------------------ 
  SEARCH FOR USER
------------------------------------------*/
const userName = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver']

function findUser(type, userName){
  return userName.filter(user => {
    const regex = new RegExp(type, 'gi');
    return user.match(regex)
  } )
}

function displayUser(){
  const matches = findUser(this.value, userName);
  let html = matches.map(user => `<li>@${user}</li>`).join('')
  document.querySelector("#result ul").innerHTML = html
}

inputSearchUser.addEventListener('keyup', displayUser)

/*------------------------------------------ 
  FLASH MESSAGES
------------------------------------------*/
const sendBtn = formSearchUser.getElementsByTagName('button');
sendBtn[0].addEventListener('click', poptip,false)

function poptip(event){
  event.preventDefault();
  if(inputSearchUser.value == '' || textAreaUserMessage.value == ''){
    formSearchUser.querySelector('.error').style.visibility = 'visible'
    formSearchUser.querySelector('.error').style.opacity = '1'
    formSearchUser.querySelector('.error').style.transform = 'translateY(50%)'
    formSearchUser.querySelector('.error').style.transition = 'all .3s'
    setTimeout(()=>{
      formSearchUser.querySelector('.error').style.visibility = 'hidden'
      formSearchUser.querySelector('.error').style.opacity = '0'
      formSearchUser.querySelector('.error').style.transform = 'translateY(300%)'
      formSearchUser.querySelector('.error').style.transition = 'all .3s'
    }, 1500)
  } else {
    formSearchUser.querySelector('.success').style.visibility = 'visible'
    formSearchUser.querySelector('.success').style.opacity = '1'
    formSearchUser.querySelector('.success').style.transform = 'translateY(50%)'
    formSearchUser.querySelector('.success').style.transition = 'all .3s'
    formSearchUser.querySelector('.success').style.backgroundColor = 'rgba(green, .6)'
    setTimeout(()=>{
      formSearchUser.querySelector('.success').style.visibility = 'hidden'
      formSearchUser.querySelector('.success').style.opacity = '0'
      formSearchUser.querySelector('.success').style.transform = 'translateY(300%)'
      formSearchUser.querySelector('.success').style.transition = 'all .3s'
    }, 1500)

  }
  console.log('ciao')
}
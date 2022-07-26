/*-------------- 7 Pie chart chartjs start ------------*/
if ($('#seolinechart8').length) {
  var ctx = document.getElementById("seolinechart8").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
      labels: ["FB", "TW", "G+", "INS"],
      datasets: [{
        backgroundColor: [
          "#8919FE",
          "#12C498",
          "#F8CB3F",
          "#E36D68"
        ],
        borderColor: '#fff',
        data: [25, 25, 25, 25],
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: true
      },
      animation: {
        easing: "easeInOutBack"
      }
    }
  });
}
/*-------------- 7 Pie chart chartjs end ------------*/

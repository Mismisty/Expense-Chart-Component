const myBarChart = document.getElementById('chart');

fetch('data.json')
.then(function(response){
  if(response.ok == true){
    return response.json();
  }
})

.then(function(data){
  //console.log(data);
  expenseChart(data, 'bar');
});

function expenseChart(data, type){ 

  new Chart(myBarChart, {
    type: type,
    data: {
      labels: data.map(row => row.day),
      datasets: [{
       // label: '# of Votes',
        data: data.map(row => row.amount),
        backgroundColor: [
          'hsl(10, 79%, 65%)',
          'hsl(10, 79%, 65%',
          'hsl(186, 34%, 60%',
          'hsl(10, 79%, 65%',
          'hsl(10, 79%, 65%',
          'hsl(10, 79%, 65%',
          'hsl(10, 79%, 65%',],
          hoverBackgroundColor: [
          'hsl(15, 80%, 73%)',
          'hsl(15, 80%, 73%)',
          'hsl(195, 52%, 75%)',
          'hsl(15, 80%, 73%)',
          'hsl(15, 80%, 73%)',
        ],
          
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      onHover: (event, chartElement) => {
        //event.native.target.style.cursor = chartElement[0] ? (SHORT CUT TO ADD POINTER ON HOVER)
        //'pointer' : 'default';
        //console.log(chartElement);
        if(chartElement.length == 1) { //ADD CURSOR POINTER
          //console.log(event.native.target.style.cursor);
          event.native.target.style.cursor = 'pointer';
        }
        if (chartElement.length == 0){  //REMOVE CURSOR POINTER
          event.native.target.style.cursor = 'default';
        }
      },
      plugins: {
        tooltip: {
          
          caretSize: 0,
          bodyFont: {
            size: 15
          },
          bodyAlign: 'center',
          callbacks: {
            title: function(){
              return '';
            }
          },

          displayColors: false,
          yAlign: 'bottom',
        },

        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          border: {
            display: false
          }
        },
        
        y: {
          beginAtZero: true,
          ticks: {
            display: false
          },
          grid: {
            display: false,
            drawTicks: false,
            color: (myBarChart) => {
              const value = myBarChart?.tick?.value;
             // console.log(value)
              return typeof value !== 'underfined' && value === 0 ? 'transparent' : 'rgba(102, 102, 102, 0.2)';
            }
          },
          border: {
            display: false
          }
        }
      }
      
    }
  });
}

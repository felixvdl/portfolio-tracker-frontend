class Pie extends React.Component{


  componentDidMount(){

    const data = {
      labels: [
      "Oil",
      "Healthcare",
      "Customer"
      ],

      datasets: [
      {
        data: [40000,5700,12490],
        backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
        ],
        hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
        ]

      }]
    };



   let ctx = document.getElementById("myPieChart").getContext("2d");

   let myPieChart = new Chart(ctx, {
     type: 'pie',
     data: data
   });

  }



  render(){
    return(
      <div id="piechart">
        <h3>Current Value by Sectors</h3>
        <canvas id="myPieChart"></canvas>
      </div>
      )
  }
}

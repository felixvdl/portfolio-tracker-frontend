class Line extends React.Component {
  componentDidMount(){
    
    let date = new Date(Date.now())

    let yesterday = new Date(Date.now() - (2* 86400000));
    let data = {

    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", ""+date.toDateString()],
    datasets: [
        {
            label: "P&L",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        },
        {
            label: "%",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [100, 200, 250, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
  };
    let ctx = document.getElementById(this.props.name).getContext("2d");

    let myPieChart = new Chart(ctx, {
      type: 'line',
      data: data
    });
  }

  render(){

    return(
      <canvas id={this.props.name}></canvas>
      )
  }
}

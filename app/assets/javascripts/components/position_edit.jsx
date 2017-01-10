class PositionEdit extends React.Component{
  constructor(){
    super()
    this.state = {
      symbol: "",
    }
    this.setNewState = this.setNewState.bind(this)
  }
  componentDidMount(){
    var that = this
    $.ajax({
      url: 'https://portfolio-tracker-backend.herokuapp.com/stocks/1/',
      dataType: "json",
    }).done(function(data){
      that.setState({
        symbol: data.history[0].symbol
      })
    })
    this.newData = setTimeout(this.setNewState, 1)
  }
  setNewState(){
  }
  render(){
    return(
      <div id="make-trade">
        <h3> Make a Trade: </h3>
        <form action="https://portfolio-tracker-backend.herokuapp.com/users/1/stocks/1" method="post">
          <select id="position_type">
            <option value="buy" >Buy</option>
            <option value="sell" >Sell</option>
          </select>
         <label id="amount" name="amount">Share Amount:</label>
         <input type="text" name="share_amount"/>
         <input type="hidden" name="ticker" value="aapl"/>
         <input id="position-sumbit-button" type="submit" value="Update Position"/>
       </form>
     </div>

    )
  }
}

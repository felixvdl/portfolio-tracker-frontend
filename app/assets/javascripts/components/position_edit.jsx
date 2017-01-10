class PositionEdit extends React.Component{
  render(){
    return(
      <div>
        <h3> Make a Trade: </h3>
        <form action="https://portfolio-tracker-backend.herokuapp.com/users/1/stocks/1" method="post">
          <select id="position-type">
            <option value="buy" >Buy</option>
            <option value="sell" >Sell</option>
          </select>
         <label id="amount" name="amount">Share Amount:</label>
         <input type="text" name="share_amount"/>
         <input id="position-sumbit-button" type="submit" value="Update Position"/>
       </form>
     </div>

    )
  }
}

class Stock extends React.Component{
  render(){
    return(
          <div className="container-fluid">
            <div className="row">
          <div className="col-sm-3 col-md-2 sidebar">
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <h2 className="sub-header">first_name last_name's Porfolio</h2>
        <div className="table-div">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Company:</th>
                <th>Stock Symbol:</th>
                <th>Original Price:</th>
                <th>Current Price:</th>
                <th>Shares Owned:</th>
                <th>P&L:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
                <td>asdf</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

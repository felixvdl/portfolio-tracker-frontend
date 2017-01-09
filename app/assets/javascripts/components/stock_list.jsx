class StockList extends React.Component{
  constructor(){
    super()
    this.state ={
      portfolioPnl: "",
      user: "",
      portfolioStocks: [],
      pnl: "",
    }
    this.getData = this.getData.bind(this)
  }

  componentDidMount(){
    let portfolio = {"name":"Jessie Dopeness","stocks":[{"stock_id":1,"ticker":"FB","company_name":"Facebook, Inc.","shares_owned":10,"original_price":100.1,"original_value":1001.0,"current_price":125.0837,"current_value":1250.837,"current_pnl":249.837},{"stock_id":2,"ticker":"GOOG","company_name":"Alphabet Inc.","shares_owned":50,"original_price":25.45,"original_value":1272.5,"current_price":806.15,"current_value":40307.5,"current_pnl":39035.0}],"portfolio_pnl":39284.837}
    this.setState({
      user: portfolio["name"],
      portfolioStocks: portfolio["stocks"],
      pnl: portfolio["portfolio_pnl"],
      portfolioPnl: portfolio["portfolio_pnl"],
    })
    this.newData = setInterval(this.getData,5000)
  }

  getData(){
    console.log("sent request")
    let portfolio = {"name":"Jessie Dopeness","stocks":[{"stock_id":1,"ticker":"FB","company_name":"Facebook, Inc.","shares_owned":10,"original_price":100.1,"original_value":1001.0,"current_price":127.0837,"current_value":1350.837,"current_pnl":249.837},{"stock_id":2,"ticker":"GOOG","company_name":"Alphabet Inc.","shares_owned":50,"original_price":25.45,"original_value":1272.5,"current_price":807.15,"current_value":40307.5,"current_pnl":39035.0}],"portfolio_pnl":40000.837}
    this.setState({
      user: portfolio["name"],
      portfolioStocks: portfolio["stocks"],
      pnl: portfolio["portfolio_pnl"],
      portfolioPnl: portfolio["portfolio_pnl"],
    })
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar">
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2 className="sub-header">{this.state.user} Portfolio:</h2>
            <h2 id="portfolio-pnl"> P&L: {this.state.portfolioPnl}</h2>
              <div className="table-div">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Company:</th>
                    <th>Stock Symbol:</th>
                    <th>Shares Owned:</th>
                    <th>Avg. Purchase Price:</th>
                    <th>Current Price:</th>
                    <th>Original Position Value:</th>
                    <th>Current Position Value:</th>
                    <th>P&L:</th>
                  </tr>
                </thead>
                  {this.state.portfolioStocks.map((stock, i) =>
                    <Stock stocks={stock} key={i}/>
                  )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

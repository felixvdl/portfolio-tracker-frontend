class Report extends React.Component {
  constructor() {
    super()
    this.state = {
      year_high: "",
      year_low: "",
    }
  }
  componentDidMount(){
    var that = this
  }
  render() {
    return (
      <div>
      <h1 className="report-header">Stock Report Details</h1>
      <table className ="profile-report">
        <tbody>
          <tr>
            <th className="header"> 52 Week High</th>
            <td> STOCK_HIGH</td>
          </tr>
          <tr>
            <th className="header"> 52 Week Low</th>
            <td> STOCK_LOW</td>
          </tr>
          <tr>
            <th className="header"> Market Cap. </th>
            <td> MARKET_CAP</td>
          </tr>
          <tr>
            <th className="header"> P/E Ratio </th>
            <td> PE_RATIO</td>
          </tr>
          <tr>
            <th className="header"> P/E Ratio </th>
            <td> PE_RATIO</td>
          </tr>
          <tr>
            <th className="header"> P/E Ratio </th>
            <td> PE_RATIO</td>
          </tr>
          <tr>
            <th className="header"> P/E Ratio </th>
            <td> PE_RATIO</td>
          </tr>
          <tr>
            <th className="header"> P/E Ratio </th>
            <td> PE_RATIO</td>
          </tr>
          <tr>
            <th className="header"> P/E Ratio </th>
            <td> PE_RATIO</td>
          </tr>
          <tr>
            <th className="header"> P/E Ratio </th>
            <td> PE_RATIO</td>
          </tr>
          <tr>
            <th className="header"> P/E Ratio </th>
            <td> PE_RATIO</td>
          </tr>
        </tbody>
    </table>
      <div className="stock-chart">
        <p id="stuff">STOCK CHART HERE 😈</p>
      </div>
    </div>
    )
  }
}

class Stock extends React.Component{
  render(){
    let{company_name, ticker, original_price, current_price, original_value, shares_owned, current_value,current_pnl} = this.props.stocks
    return(
      <tbody>
        <tr>

          <td><a href="#">{company_name}</a></td>
          <td>{ticker}</td>
          <td>{shares_owned}</td>
          <td>{original_price}</td>
          <td>{current_price}</td>
          <td>{original_value}</td>
          <td>{current_value}</td>
          <td>{current_pnl}</td>
        </tr>
      </tbody>
     )
  }
}

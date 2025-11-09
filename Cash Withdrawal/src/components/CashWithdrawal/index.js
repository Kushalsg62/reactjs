import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  handleWithdraw = amount => {
    this.setState(prevState => ({
      balance: prevState.balance - amount,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="card">
        <div className="top-card">
          <p className="name-profile">S</p>
          <h1 className="name">Sarah Williams</h1>
        </div>
        <div className="middle-card">
          <p className="balance-heading">Your Balance</p>
          <div>
            <p className="balance">{balance}</p>
            <p className="balance-in-rupees">In Rupees</p>
          </div>
        </div>
        <div className="bottom-card">
          <p className="withdraw">Withdraw</p>
          <p className="sum-choose">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            <div className="button-container">
              {denominationsList.map(denomination => (
                <DenominationItem
                  key={denomination.id}
                  value={denomination.value}
                  onWithdraw={this.handleWithdraw}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

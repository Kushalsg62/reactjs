import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {balance, income, expense} = moneyDetails

  return (
    <div className="MoneyDetails-container">
      <div className="MoneyDetails-Balance">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            width="80px"
            alt="balance"
          />
        </div>
        <div className="MoneyDetails-text-container">
          <p className="MoneyDetails-heading">Your Balance</p>
          <p className="MoneyDetails-Rupees" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="MoneyDetails-Income">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            width="80px"
            alt="income"
          />
        </div>
        <div className="MoneyDetails-text-container">
          <p className="MoneyDetails-heading">Your Income</p>
          <p className="MoneyDetails-Rupees" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="MoneyDetails-Expense">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            width="80px"
            alt="expenses"
          />
        </div>
        <div className="MoneyDetails-text-container">
          <p className="MoneyDetails-heading">Your Expenses</p>
          <p className="MoneyDetails-Rupees" data-testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

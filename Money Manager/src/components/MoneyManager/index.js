import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expense: 0,
    history: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()

    const {title, amount, type} = this.state
    const numericAmount = parseInt(amount, 10)

    if (title.trim() === '' || amount === '' || Number.isNaN(numericAmount)) {
      return
    }

    const typeOption = transactionTypeOptions.find(
      option => option.optionId === type,
    )

    const newHistory = {
      id: uuidv4(),
      title,
      amount: numericAmount,
      type: typeOption.displayText,
    }

    this.setState(
      prevState => ({
        history: [...prevState.history, newHistory],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
      }),
      this.updateTotals,
    )
  }

  updateTotals = () => {
    const {history} = this.state

    let updatedIncome = 0
    let updatedExpense = 0

    history.forEach(item => {
      if (item.type === 'Income') {
        updatedIncome += item.amount
      } else if (item.type === 'Expenses') {
        updatedExpense += item.amount
      }
    })

    const updatedBalance = updatedIncome - updatedExpense

    this.setState({
      income: updatedIncome,
      expense: updatedExpense,
      balance: updatedBalance,
    })
  }

  onDeleteTransaction = id => {
    this.setState(
      prevState => ({
        history: prevState.history.filter(each => each.id !== id),
      }),
      this.updateTotals,
    )
  }

  render() {
    const {title, amount, income, balance, expense, type, history} = this.state

    return (
      <div className="background-container">
        <div className="first-container">
          <h1 className="first-container-heading">Hi, Richard</h1>
          <p className="first-container-para">
            Welcome back to your
            <span className="first-container-span"> Money Manager</span>
          </p>
        </div>

        <div className="second-container">
          <MoneyDetails moneyDetails={{balance, income, expense}} />
        </div>

        <div className="third-container">
          <div className="add-transaction-container">
            <h1 className="heading">Add Transaction</h1>

            <form onSubmit={this.onSubmit}>
              <label htmlFor="text" className="label-title">
                TITLE
              </label>
              <input
                type="text"
                id="text"
                placeholder="TITLE"
                className="input-title"
                value={title}
                onChange={this.onChangeTitle}
              />

              <label htmlFor="number" className="label-number">
                AMOUNT
              </label>
              <input
                type="text"
                id="number"
                className="input-number"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.onChangeAmount}
              />

              <label htmlFor="type" className="label-type">
                TYPE
              </label>
              <select
                id="type"
                className="input-type"
                value={type}
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>

              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>

          <div className="history-container">
            <h1 className="history-heading">History</h1>

            <div className="table-container">
              <p className="table-title-heading">Title</p>
              <p className="table-amount-heading">Amount</p>
              <p className="table-type-heading">Type</p>
              <h1 className="table-delete-heading">Delete</h1>
            </div>

            <ul className="history-list">
              {history.map(each => (
                <TransactionItem
                  key={each.id}
                  details={each}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

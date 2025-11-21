import './index.css'

const TransactionItem = props => {
  const {details, onDeleteTransaction} = props
  const {id, title, amount, type} = details

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="transaction-title">{title}</p>
      <p className="transaction-amount">{amount}</p>
      <p className="transaction-type">{type}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem

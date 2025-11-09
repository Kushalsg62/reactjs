import './index.css'

const DenominationItem = props => {
  const {value, onWithdraw} = props
  return (
    <li className="list">
      <button
        type="button"
        onClick={() => onWithdraw(value)}
        className="button"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

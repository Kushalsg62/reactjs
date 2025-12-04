import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {
    currency_name: currencyName,
    usd_value: usdValue,
    euro_value: euroValue,
    currency_logo: currencyLogo,
  } = currencyDetails

  return (
    <li className="currency-item">
      <div className="currency-info">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-values">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

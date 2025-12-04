import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptocurrenciesData} = props

  return (
    <div className="cryptocurrencies-list-container">
      <h1 className="list-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="cryptocurrency-image"
      />
      <div className="list-header">
        <p className="list-coin-type">Coin Type</p>
        <div className="list-values-container">
          <p className="list-value-heading">USD</p>
          <p className="list-value-heading">EURO</p>
        </div>
      </div>
      <ul className="cryptocurrencies-list">
        {cryptocurrenciesData.map(eachCrypto => (
          <CryptocurrencyItem
            key={eachCrypto.id}
            currencyDetails={eachCrypto}
          />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList

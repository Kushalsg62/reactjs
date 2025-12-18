import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }

  return (
    <div className="home-bg">
      <nav className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="nav-logo"
        />
        <button className="logout-btn" type="button" onClick={onLogout}>
          Logout
        </button>
      </nav>
      <div className="card-container">
        <h1 className="heading">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="card-img"
        />
      </div>
    </div>
  )
}

export default Home

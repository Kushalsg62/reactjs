import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        width="50px"
        className="logo"
      />
      <p className="logo-text">Wave</p>
    </div>
    <ul className="list">
      <li>
        <Link to="/" className="header-text">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="header-text">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="header-text">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header

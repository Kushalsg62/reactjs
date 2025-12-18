import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    userId: '',
    pin: '',
    errorMsg: '',
    showError: false,
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state

    const userDetails = {
      user_id: userId,
      pin,
    }

    const response = await fetch('https://apis.ccbp.in/ebank/login', {
      method: 'POST',
      body: JSON.stringify(userDetails),
    })

    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({
        errorMsg: data.error_msg,
        showError: true,
      })
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {userId, pin, errorMsg, showError} = this.state

    return (
      <div className="login-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
          alt="website login"
          className="login-img"
        />
        <form className="login-card" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
            className="logo"
          />

          <div className="input-container">
            <label className="label" htmlFor="userId">
              User ID
            </label>
            <input
              id="userId"
              type="text"
              className="input"
              placeholder="Enter User ID"
              value={userId}
              onChange={this.onChangeUserId}
            />
          </div>

          <div className="input-container">
            <label className="label" htmlFor="pin">
              PIN
            </label>
            <input
              id="pin"
              type="password"
              className="input"
              placeholder="Enter PIN"
              value={pin}
              onChange={this.onChangePin}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          {showError && <p className="error-msg">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login

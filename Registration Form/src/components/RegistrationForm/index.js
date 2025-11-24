import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      firstNameError: '',
      lastNameError: '',
      isSubmitted: false,
    }
  }

  handleFirstNameBlur = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: 'Required'})
    } else {
      this.setState({firstNameError: ''})
    }
  }

  handleLastNameBlur = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameError: 'Required'})
    } else {
      this.setState({lastNameError: ''})
    }
  }

  handleFirstNameChange = e => {
    this.setState({firstName: e.target.value})
  }

  handleLastNameChange = e => {
    this.setState({lastName: e.target.value})
  }

  handleSubmit = () => {
    const {firstName, lastName} = this.state
    let hasError = false

    if (firstName === '') {
      this.setState({firstNameError: 'Required'})
      hasError = true
    } else {
      this.setState({firstNameError: ''})
    }

    if (lastName === '') {
      this.setState({lastNameError: 'Required'})
      hasError = true
    } else {
      this.setState({lastNameError: ''})
    }

    if (!hasError) {
      this.setState({isSubmitted: true})
    }
  }

  handleSubmitAnother = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameError: '',
      lastNameError: '',
      isSubmitted: false,
    })
  }

  renderRegistrationForm = () => {
    const {firstName, lastName, firstNameError, lastNameError} = this.state

    return (
      <div className="registration-container">
        <h1 className="form-heading">Registration</h1>

        <div className="input-container">
          <label htmlFor="firstName" className="label">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            className={`input-field ${firstNameError ? 'error-input' : ''}`}
            value={firstName}
            onChange={this.handleFirstNameChange}
            onBlur={this.handleFirstNameBlur}
            placeholder="First name"
          />
          {firstNameError && <p className="error-message">{firstNameError}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="lastName" className="label">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            className={`input-field ${lastNameError ? 'error-input' : ''}`}
            value={lastName}
            onChange={this.handleLastNameChange}
            onBlur={this.handleLastNameBlur}
            placeholder="Last name"
          />
          {lastNameError && <p className="error-message">{lastNameError}</p>}
        </div>

        <button
          type="button"
          className="submit-button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    )
  }

  renderSuccessView = () => {
    return (
      <div className="success-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-icon"
        />
        <p className="success-message">Submitted Successfully</p>
        <button
          type="button"
          className="submit-another-button"
          onClick={this.handleSubmitAnother}
        >
          Submit Another Response
        </button>
      </div>
    )
  }

  render() {
    const {isSubmitted} = this.state

    return (
      <div className="app-container">
        {isSubmitted ? this.renderSuccessView() : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm

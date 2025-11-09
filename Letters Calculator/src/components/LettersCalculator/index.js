import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {value: 0, type: ''}

  onChangeMethod = event => {
    this.setState({
      type: event.target.value,
      value: event.target.value.length,
    })
  }

  render() {
    const {value, type} = this.state

    return (
      <div className="body">
        <div>
          <h1>
            Calculate the <br /> Letters you <br /> enter
          </h1>
          <label className="label" htmlFor="phraseInput">
            Enter the phrase
          </label>
          <input
            id="phraseInput"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeMethod}
            value={type}
            className="input"
          />
          <p className="para">No.of letters: {value}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

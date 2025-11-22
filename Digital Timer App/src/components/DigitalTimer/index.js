import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {count: 25, isStartOrPause: false, timeInSeconds: 25 * 60}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  StartOrPause = () => {
    const {isStartOrPause} = this.state

    if (isStartOrPause) {
      clearInterval(this.timerId)
      this.setState({isStartOrPause: false})
    } else {
      this.setState({isStartOrPause: true})
      this.timerId = setInterval(this.runTimer, 1000)
    }
  }

  runTimer = () => {
    const {timeInSeconds} = this.state

    if (timeInSeconds > 0) {
      this.setState(prevState => ({
        timeInSeconds: prevState.timeInSeconds - 1,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isStartOrPause: false})
    }
  }

  onAddition = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      timeInSeconds: (prevState.count + 1) * 60,
    }))
  }

  onSubtract = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
      timeInSeconds: (prevState.count - 1) * 60,
    }))
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({
      count: 25,
      timeInSeconds: 25 * 60,
      isStartOrPause: false,
    })
  }

  render() {
    const {count, isStartOrPause, timeInSeconds} = this.state

    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60

    const timer = `${String(minutes).padStart(2, '0')}:${String(
      seconds,
    ).padStart(2, '0')}`

    return (
      <div className="background-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="main-conatiner">
          <div className="timer-conatiner">
            <div className="timer-background">
              <h1 className="timer">{timer}</h1>
              <p>{isStartOrPause ? 'Running' : 'Paused'}</p>
            </div>
          </div>

          <div className="timer-set-container">
            <div className="start-reset-conatiner">
              <div className="start-reset-conatiner">
                <button
                  type="button"
                  className="start-reset-button"
                  onClick={this.StartOrPause}
                >
                  {isStartOrPause ? (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      width="50px"
                      alt="pause"
                    />
                  ) : (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      width="50px"
                      alt="play icon"
                    />
                  )}
                </button>
                <button type="button" className="start-reset-text">
                  {isStartOrPause ? 'Pause' : 'Start'}
                </button>
              </div>

              <div className="start-reset-conatiner">
                <button
                  type="button"
                  className="start-reset-button"
                  onClick={this.onReset}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    width="50px"
                    alt="reset"
                  />
                </button>
                <button type="button" className="start-reset-text">
                  Reset
                </button>
              </div>
            </div>

            <p className="set-timer">Set Timer Limit</p>

            <div>
              <button
                type="button"
                className="minus-button"
                onClick={this.onSubtract}
                disabled={isStartOrPause}
              >
                -
              </button>

              <button type="button" className="time-button">
                {count}
              </button>

              <button
                type="button"
                className="add-button"
                onClick={this.onAddition}
                disabled={isStartOrPause}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

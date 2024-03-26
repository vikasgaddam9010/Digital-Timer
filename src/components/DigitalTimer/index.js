import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {isPlaying: true, isStarted: false, timer: 25, stopWatch: "25:00"}
  }

  onClikcToStart = () => {
    this.setState({isPlaying: false})
    this.setState(prevState => ({isStarted: !prevState.isStarted}))
    this.timerID = setInterval(this.stopwatchFunc, 1000)
  }
  stopwatchFunc = () => {
    this.setState(prevState => ({timer: prevState.timer - 1}))
  }
  onClickToResst = () => {
    this.setState({isPlaying: true, isStarted: false, timer: 25, stopWatch: "25:00"})
    clearInterval(this.timerID)
  }
  onClickDe = () => {
    const {isStarted, timer,} = this.state
    if (isStarted === false) {
      this.setState(prevState => ({timer: prevState.timer - 1}))
      this.setState({stopWatch: `${timer-1}:00`})
    }
  }
  onClickIn = () => {
    const {isStarted, timer} = this.state
    if (isStarted === false) {
      this.setState(prevState => ({timer: prevState.timer + 1}))
      this.setState({stopWatch: `${timer+1}:00`})
    }
  }
  render() {
    const {isPlaying, timer, isStarted, stopWatch} = this.state
    const isPlayOrPauseImage = isStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const isTimerStatus = isStarted ? 'Running' : 'Paused'
    const startOrPauseAltText = isStarted ? 'pause icon' : 'play icon'
    
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="bottom-section">
          <div className="timer-container">
            <div className="counter">
              <h1 className="timer">{stopWatch}</h1>
              <p className="playStatus">{isTimerStatus}</p>
            </div>
          </div>
          <div>
            <div className="play-pause-container">
              <div className="play-pause">
                <button onClick={this.onClikcToStart} className="btn">
                  <img alt={startOrPauseAltText} src={isPlayOrPauseImage} />
                </button>
                <h1>{isPlaying ? 'Start' : isStarted ? 'Pause' : 'Play'}</h1>
              </div>
              <div className="play-pause">
                <button onClick={this.onClickToResst} className="btn">
                  <img
                    alt="reset icon"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  />
                </button>
                <h1>Reset</h1>
              </div>
            </div>
            <div className="set-timer-limit-container">
              <p>Set Timer Limit</p>
              <div className="time-set">
                <button onClick={this.onClickDe} className="btn" type="submit">
                  <h1 className="margin">-</h1>
                </button>

                <h1 className="margin input" type="text">
                  {timer}
                </h1>
                <button onClick={this.onClickIn} className="btn" type="submit">
                  <h1 className="margin">+</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer

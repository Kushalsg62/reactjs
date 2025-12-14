import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultText = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Your Score'

  return (
    <div className="win-lose-card-container">
      <div className="result-container">
        <div className="text-container">
          <h1 className="result-text">{resultText}</h1>
          <p className="score-label">{scoreLabel}</p>
          <p className="score-value">{score}/12</p>
          <button
            type="button"
            className="play-again-button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
        <img src={imageUrl} alt="win or lose" className="result-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard

import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    topScore: 0,
    isGameInProgress: true,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList, topScore} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const currentScore = clickedEmojisList.length

    if (isEmojiPresent) {
      let newTopScore = topScore
      if (currentScore > topScore) {
        newTopScore = currentScore
      }
      this.setState({
        topScore: newTopScore,
        isGameInProgress: false,
      })
    } else {
      if (clickedEmojisList.length === emojisList.length - 1) {
        let newTopScore = topScore
        if (currentScore + 1 > topScore) {
          newTopScore = currentScore + 1
        }
        this.setState({
          topScore: newTopScore,
          isGameInProgress: false,
        })
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      clickedEmojisList: [],
      isGameInProgress: true,
    })
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="emoji-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  renderWinOrLoseCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length
    const score = clickedEmojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={score}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }

  render() {
    const {clickedEmojisList, topScore, isGameInProgress} = this.state

    return (
      <div className="background-container">
        <NavBar
          score={clickedEmojisList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="game-body-container">
          {isGameInProgress
            ? this.renderEmojisList()
            : this.renderWinOrLoseCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame

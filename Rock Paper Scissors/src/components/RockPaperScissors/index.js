import {useState} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  AppContainer,
  Card,
  Header,
  Title,
  ScoreCard,
  ScoreText,
  ScoreValue,
  ChoicesContainer,
  ChoiceButton,
  ChoiceImage,
  ResultContainer,
  ResultImages,
  ResultImageCard,
  ResultImage,
  ResultText,
  PlayAgainButton,
  RulesButton,
  PopupContainer,
  CloseButton,
  RulesImage,
} from './styledComponents'

const RockPaperScissors = props => {
  const {choicesList} = props

  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [yourChoice, setYourChoice] = useState(null)
  const [opponentChoice, setOpponentChoice] = useState(null)
  const [result, setResult] = useState('')

  const getResult = (user, opponent) => {
    if (user.id === opponent.id) {
      return 'IT IS DRAW'
    }

    if (
      (user.id === 'ROCK' && opponent.id === 'SCISSORS') ||
      (user.id === 'PAPER' && opponent.id === 'ROCK') ||
      (user.id === 'SCISSORS' && opponent.id === 'PAPER')
    ) {
      return 'YOU WON'
    }

    return 'YOU LOSE'
  }

  const onClickChoice = id => {
    const user = choicesList.find(each => each.id === id)
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const opponent = choicesList[randomIndex]

    const gameResult = getResult(user, opponent)

    if (gameResult === 'YOU WON') {
      setScore(prev => prev + 1)
    } else if (gameResult === 'YOU LOSE') {
      setScore(prev => prev - 1)
    }

    setYourChoice(user)
    setOpponentChoice(opponent)
    setResult(gameResult)
    setIsPlaying(false)
  }

  const onPlayAgain = () => {
    setIsPlaying(true)
  }

  return (
    <AppContainer>
      <Card>
        <Header>
          <Title>
            Rock <br />
            Paper <br />
            Scissors
          </Title>
          <ScoreCard>
            <ScoreText>Score</ScoreText>
            <ScoreValue>{score}</ScoreValue>
          </ScoreCard>
        </Header>

        {isPlaying ? (
          <ChoicesContainer>
            {choicesList.map(each => (
              <ChoiceButton
                key={each.id}
                data-testid={`${each.id.toLowerCase()}Button`}
                onClick={() => onClickChoice(each.id)}
              >
                <ChoiceImage src={each.imageUrl} alt={each.id} />
              </ChoiceButton>
            ))}
          </ChoicesContainer>
        ) : (
          <ResultContainer>
            <ResultImages>
              <ResultImageCard>
                <ResultImage src={yourChoice.imageUrl} alt="your choice" />
              </ResultImageCard>
              <ResultImageCard>
                <ResultImage
                  src={opponentChoice.imageUrl}
                  alt="opponent choice"
                />
              </ResultImageCard>
            </ResultImages>
            <ResultText>{result}</ResultText>
            <PlayAgainButton onClick={onPlayAgain}>PLAY AGAIN</PlayAgainButton>
          </ResultContainer>
        )}
      </Card>

      <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
        {close => (
          <PopupContainer>
            <CloseButton onClick={close}>
              <RiCloseLine size={20} />
            </CloseButton>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupContainer>
        )}
      </Popup>
    </AppContainer>
  )
}

export default RockPaperScissors

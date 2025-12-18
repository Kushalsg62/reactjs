import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const Card = styled.div`
  width: 100%;
  max-width: 700px;
`

export const Header = styled.div`
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  color: #ffffff;
  font-family: Bree Serif;
  font-size: 24px;
`

export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px 20px;
  text-align: center;
`

export const ScoreText = styled.p`
  font-family: Bree Serif;
  margin: 0;
`

export const ScoreValue = styled.p`
  font-family: Roboto;
  font-size: 32px;
  margin: 0;
`

export const ChoicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
`

export const ChoiceButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 20px;
`

export const ChoiceImage = styled.img`
  width: 140px;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`

export const ResultImages = styled.div`
  display: flex;
  justify-content: center;
`

export const ResultImageCard = styled.div`
  margin: 0 30px;
`

export const ResultImage = styled.img`
  width: 140px;
`

export const ResultText = styled.p`
  color: #ffffff;
  font-family: Bree Serif;
  font-size: 28px;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20px;
`

export const PopupContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: flex-end;
`

export const RulesImage = styled.img`
  width: 100%;
`

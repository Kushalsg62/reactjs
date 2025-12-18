import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  Heading,
  DirectionsContainer,
  DirectionsList,
  ColorsContainer,
  ColorPickerContainer,
  ColorText,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientDirection: gradientDirectionsList[0].value,
  }

  changeDirection = value => {
    this.setState({activeDirection: value})
  }

  changeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  generateGradient = () => {
    const {activeDirection} = this.state
    this.setState({gradientDirection: activeDirection})
  }

  render() {
    const {activeDirection, color1, color2, gradientDirection} = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientDirection={gradientDirection}
        color1={color1}
        color2={color2}
      >
        <Heading>Generate a CSS Color Gradient</Heading>

        <DirectionsContainer>
          <p>Choose Direction</p>
          <DirectionsList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                details={each}
                isActive={activeDirection === each.value}
                changeDirection={this.changeDirection}
              />
            ))}
          </DirectionsList>
        </DirectionsContainer>

        <ColorsContainer>
          <p>Pick the Colors</p>

          <ColorPickerContainer>
            <ColorText>{color1}</ColorText>
            <ColorInput
              type="color"
              value={color1}
              onChange={this.changeColor1}
            />
          </ColorPickerContainer>

          <ColorPickerContainer>
            <ColorText>{color2}</ColorText>
            <ColorInput
              type="color"
              value={color2}
              onChange={this.changeColor2}
            />
          </ColorPickerContainer>
        </ColorsContainer>

        <GenerateButton type="button" onClick={this.generateGradient}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator

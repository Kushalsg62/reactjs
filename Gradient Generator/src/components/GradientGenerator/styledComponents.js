import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.gradientDirection},
    ${props => props.color1},
    ${props => props.color2}
  );
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 32px;
  margin-bottom: 24px;
`

export const DirectionsContainer = styled.div`
  text-align: center;
`

export const DirectionsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`

export const ColorsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ColorText = styled.p`
  color: #ffffff;
  margin-bottom: 8px;
`

export const ColorInput = styled.input`
  width: 80px;
  height: 40px;
  border: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  cursor: pointer;
`

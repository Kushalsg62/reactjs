import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActive, changeDirection} = props
  const {value, displayText} = details

  const onClickDirection = () => {
    changeDirection(value)
  }

  return (
    <DirectionItem>
      <DirectionButton
        type="button"
        onClick={onClickDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem

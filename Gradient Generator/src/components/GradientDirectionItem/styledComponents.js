import styled from 'styled-components'

export const DirectionItem = styled.li``

export const DirectionButton = styled.button`
  background-color: #ffffff79;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`

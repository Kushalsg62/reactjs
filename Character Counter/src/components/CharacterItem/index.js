import './index.css'

const CharacterItem = ({text, count}) => (
  <li className="character-item">
    <p className="character-text">
      {text} : {count}
    </p>
  </li>
)

export default CharacterItem

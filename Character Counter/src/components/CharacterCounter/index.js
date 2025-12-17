import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharacterItem from '../CharacterItem'
import './index.css'

const CharacterCounter = () => {
  const [inputValue, setInputValue] = useState('')
  const [characterList, setCharacterList] = useState([])

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      const newItem = {
        id: uuidv4(),
        text: inputValue,
        count: inputValue.length,
      }
      setCharacterList([...characterList, newItem])
      setInputValue('')
    }
  }

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleAddClick()
    }
  }

  return (
    <div className="character-counter-container">
      <div className="left-section">
        <h1 className="main-heading">Count the characters like a Boss...</h1>

        <div className="characters-list-container">
          {characterList.length === 0 ? (
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-user-inputs-image"
              />
            </div>
          ) : (
            <ul className="characters-list">
              {characterList.map(item => (
                <CharacterItem
                  key={item.id}
                  text={item.text}
                  count={item.count}
                />
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="right-section">
        <h1 className="counter-heading">Character Counter</h1>

        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter the Characters here"
            className="user-input"
          />
          <button onClick={handleAddClick} className="add-button">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterCounter

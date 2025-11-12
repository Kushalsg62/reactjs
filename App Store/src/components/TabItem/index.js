import './index.css'

const TabItem = props => {
  const {displayTextValue, updateActiveTab} = props
  const {displayText, tabId} = displayTextValue

  const tabClick = () => {
    updateActiveTab(tabId)
  }

  return (
    <li className="list">
      <button type="button" className="button" onClick={tabClick}>
        <p>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem

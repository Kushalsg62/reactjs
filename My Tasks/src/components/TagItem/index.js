import './index.css'

const TagItem = props => {
  const {tagDetails, isActive, setActiveTag} = props
  const {optionId, displayText} = tagDetails

  const onClickTag = () => {
    setActiveTag(optionId)
  }

  const tagClassName = isActive ? 'tag-button active' : 'tag-button'

  return (
    <li className="tag-item">
      <button type="button" onClick={onClickTag} className={tagClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TagItem

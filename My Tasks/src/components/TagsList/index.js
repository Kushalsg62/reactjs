import TagItem from '../TagItem'
import './index.css'

const TagsList = props => {
  const {tagsList, activeTag, setActiveTag} = props

  return (
    <ul className="tags-list">
      {tagsList.map(tag => (
        <TagItem
          key={tag.optionId}
          tagDetails={tag}
          isActive={activeTag === tag.optionId}
          setActiveTag={setActiveTag}
        />
      ))}
    </ul>
  )
}

export default TagsList

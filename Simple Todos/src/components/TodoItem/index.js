import './index.css'

const TodoItem = props => {
  const {abc, deleteTodo} = props
  const {id, title} = abc

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

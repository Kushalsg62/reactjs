import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {task, tag} = taskDetails

  return (
    <li className="task-item">
      <p className="task-text">{task}</p>
      <p className="task-tag">{tag}</p>
    </li>
  )
}

export default TaskItem

import TaskItem from '../TaskItem'
import './index.css'

const TasksList = props => {
  const {tasksList} = props

  return (
    <div className="tasks-container">
      {tasksList.length === 0 ? (
        <p className="no-tasks-text">No Tasks Added Yet</p>
      ) : (
        <ul className="tasks-list">
          {tasksList.map(task => (
            <TaskItem key={task.id} taskDetails={task} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TasksList

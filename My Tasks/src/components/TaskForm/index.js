import {Component} from 'react'
import './index.css'

class TaskForm extends Component {
  state = {
    taskInput: '',
    tagInput: '',
  }

  componentDidMount() {
    const {tagsList} = this.props
    this.setState({tagInput: tagsList[0].optionId})
  }

  onChangeTask = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeTag = event => {
    this.setState({tagInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {taskInput, tagInput} = this.state
    const {addTask, tagsList} = this.props

    if (taskInput.trim() !== '') {
      addTask(taskInput, tagInput)
      this.setState({
        taskInput: '',
        tagInput: tagsList[0].optionId,
      })
    }
  }

  render() {
    const {taskInput, tagInput} = this.state
    const {tagsList} = this.props

    return (
      <form className="task-form" onSubmit={this.onSubmitForm}>
        <h1 className="form-heading">Create a task!</h1>
        <div className="input-container">
          <label htmlFor="task" className="label">
            Task
          </label>
          <input
            type="text"
            id="task"
            value={taskInput}
            onChange={this.onChangeTask}
            placeholder="Enter the task here"
            className="input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="tags" className="label">
            Tags
          </label>
          <select
            id="tags"
            value={tagInput}
            onChange={this.onChangeTag}
            className="select"
          >
            {tagsList.map(tag => (
              <option key={tag.optionId} value={tag.optionId}>
                {tag.displayText}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="add-task-button">
          Add Task
        </button>
      </form>
    )
  }
}

export default TaskForm

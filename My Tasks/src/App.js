import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TaskForm from './components/TaskForm'
import TagsList from './components/TagsList'
import TasksList from './components/TasksList'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    tasksList: [],
    activeTag: '',
  }

  addTask = (taskName, tag) => {
    const newTask = {
      id: uuidv4(),
      task: taskName,
      tag,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
    }))
  }

  setActiveTag = optionId => {
    this.setState(prevState => ({
      activeTag: prevState.activeTag === optionId ? '' : optionId,
    }))
  }

  getFilteredTasks = () => {
    const {tasksList, activeTag} = this.state
    if (activeTag === '') {
      return tasksList
    }
    return tasksList.filter(task => task.tag === activeTag)
  }

  render() {
    const {activeTag} = this.state
    const filteredTasks = this.getFilteredTasks()

    return (
      <div className="app-container">
        <div className="left-section">
          <TaskForm tagsList={tagsList} addTask={this.addTask} />
        </div>
        <div className="right-section">
          <h1 className="tags-heading">Tags</h1>
          <TagsList
            tagsList={tagsList}
            activeTag={activeTag}
            setActiveTag={this.setActiveTag}
          />
          <h1 className="tasks-heading">Tasks</h1>
          <TasksList tasksList={filteredTasks} />
        </div>
      </div>
    )
  }
}

export default App

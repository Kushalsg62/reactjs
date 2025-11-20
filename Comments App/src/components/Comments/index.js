import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    count: 0,
    commentsList: [],
  }

  onChangingName = event => {
    this.setState({name: event.target.value})
  }

  onChangingComment = event => {
    this.setState({comment: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const randomIndex = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const randomColor = initialContainerBackgroundClassNames[randomIndex]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      colorClass: randomColor,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => each.id !== id),
      count: prevState.count - 1,
    }))
  }

  onToggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {count, name, comment, commentsList} = this.state

    return (
      <div className="background-container">
        <div className="first-container">
          <div className="input-container">
            <h1 className="heading">Comments</h1>

            <form className="form" onSubmit={this.onSubmit}>
              <p className="label">Say Something about 4.0 Technologies</p>

              <input
                type="text"
                id="input"
                className="input-name"
                placeholder="Your Name"
                onChange={this.onChangingName}
                value={name}
              />

              <textarea
                id="comment"
                rows="6"
                cols="40"
                className="input-comment"
                placeholder="Your Comment"
                onChange={this.onChangingComment}
                value={comment}
              />

              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>

          <div className="comment-img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              width="500px"
              alt="comments"
            />
          </div>
        </div>

        <hr className="horizontal-line" />

        <div className="second-container">
          <p className="count-value">{count}</p>
          <p className="commnet-text">Comments</p>

          <ul>
            {commentsList.map(each => (
              <li key={each.id} className="list">
                <CommentItem
                  commentDetails={each}
                  onDeleteComment={this.onDeleteComment}
                  onToggleLike={this.onToggleLike}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments

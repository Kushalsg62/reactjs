import {useState} from "react"
import './index.css'

const ReviewsCarousel = props => {
  const {reviewsList} = props
  const [index, setIndex] = useState(0)

  const review = reviewsList[index]
  const {imgUrl, username, companyName, description} = review

  const onLeftClick = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  const onRightClick = () => {
    if (index < reviewsList.length - 1) {
      setIndex(index + 1)
    }
  }

  return (
    <div className="background">
      <h1>Reviews</h1>

      <div className="review-container">
        <button
          data-testid="leftArrow"
          onClick={onLeftClick}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>

        <div className="review-content">
          <img src={imgUrl} alt={username} className="avatar" />

          <p className="user-name">{username}</p>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>

        <button
          data-testid="rightArrow"
          onClick={onRightClick}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarousel

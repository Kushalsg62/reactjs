import './index.css'

const AppItem = props => {
  const {appListValue} = props
  const {imageUrl, appName} = appListValue
  return (
    <li className="card">
      <img src={imageUrl} alt={appName} className="img" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem

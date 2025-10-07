import './index.css'

const Home = props => {
  const {dsf} = props
  return (
    <div className="main">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="home"
      />
      <h1>Not Found</h1>
    </div>
  )
}

export default Home

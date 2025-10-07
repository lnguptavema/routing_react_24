import './index.css'

const Home = props => {
  const {dsf} = props
  return (
    <div className="main">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
        alt="home"
      />
      <h1>Home</h1>
    </div>
  )
}

export default Home

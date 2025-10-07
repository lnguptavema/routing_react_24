import './index.css'

const About = props => {
  const {dsf} = props
  return (
    <div className="main">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        alt="about"
      />
      <h1>About</h1>
    </div>
  )
}

export default About

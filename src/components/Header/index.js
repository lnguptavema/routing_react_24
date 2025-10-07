import './index.css'

import {Link} from 'react-router-dom'

const Header = props => {
  const {sdf} = props
  return (
    <div>
      <div className="MainContainer">
        <div className="card1">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
            alt="wave"
          />
          <h1>Wave</h1>
        </div>
        <ul>
          <li>
            {' '}
            <Link to="/" className="Link">
              Home
            </Link>
          </li>
          <li>
            {' '}
            <Link to="/about" className="Link">
              {' '}
              About
            </Link>
          </li>
          <li>
            {' '}
            <Link to="/contact" className="Link">
              {' '}
              Contact
            </Link>
          </li>
        </ul>{' '}
      </div>
    </div>
  )
}
//
export default Header

import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="navbar-mobile-logocontainer">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="website-logo"
              alt="website logo"
            />
          </Link>
          <ul className="navbar-mobile-iconscontainer">
            <li>
              <Link to="/">
                <AiFillHome className="navitem-mobile-link" />
              </Link>
            </li>
            <li>
              <Link to="/Jobs">
                <BsFillBriefcaseFill className="navitem-mobile-link" />
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="navitem-btn"
                onClick={onClickLogout}
              >
                <FiLogOut />
              </button>
            </li>
          </ul>
        </div>

        <div className="navbar-largecontainer">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="website-logo"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="navmenu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navmenu-item">
              <Link to="/Jobs" className="nav-link">
                Jobs
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktopbtn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)

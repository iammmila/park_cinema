import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
import logo from "../../../assets/logo/download.svg"

function Footer() {
  return (
    <footer>
      <div className="container">
        <ul className="footer">
          <li >
            <ul className='navlist'>
              <li>
                <Link
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/cinemas"
                >
                  Cinemas
                </Link>
              </li>
              <li>
                <Link
                  to="/campaign"
                >
                  Campaigns
                </Link>
              </li>
              <li>
                <Link
                  to="/vip"
                >
                  VIP
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies
                "
                >
                  Technologies
                </Link>
                <li className="dropdown-item">
                  <Link
                    to="/technologies/imax"

                  >IMAX
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/technologies/laser"
                  >
                    LASER
                  </Link>
                </li>
              </li>
              <li >
                <Link
                  to="/"
                  style={{ letterSpacing: "10px" }}
                >
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                >About
                </Link>
              </li>
              <li>
                <Link
                  to="/about/privacy"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/about/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/about/cookies"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </li>
          <li>
          <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>
          </li>
          <li>

          </li>
        </ul>
      </div >
    </footer >
  )
}

export default Footer
import React, { useContext } from 'react'
import "./style.scss"
import { Link, NavLink } from "react-router-dom"
import { MainContext } from "../../../context/ContextProvider"
import logo from "../../../assets/logo/download.svg"
import { MdModeNight, MdLightMode } from "react-icons/md"
import { RiArrowDropDownLine } from "react-icons/ri"

function Navbar() {

  const activeStyle = {
    color: "red"
  }
  const { mode, setMode } = useContext(MainContext)
  const changeTheme = () => {
    setMode(mode === "dark" ? "light" : "dark")
  }

  return (
    <nav>
      <div className='container'>
        <div className="navbar">
          <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>
          <ul className='nav'>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/programs"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Schedule
              </NavLink>
            </li>
            <li className="has-dropdown">
              <NavLink
                to="/cinemas"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Cinemas
                <RiArrowDropDownLine style={{ fontSize: "25px" }} />
              </NavLink>
              <ul className="dropdown dropdown-1">
                <li className="dropdown-item">
                  <Link
                    to="/cinemas/parkbulvar"
                  >Park Bulvar
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/cinemas/metropark"
                  >
                    Metro Park
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/cinemas/flametowers"
                  >
                    Flame Towers
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/cinemas/zaqulba"
                  >
                    Zaqulba
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/cinemas/shahdag"
                  >
                    ShahDag
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/cinemas/aygunmall"
                  >
                    Aygun Mall
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/campaign"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Campaigns
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vip"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                VIP
              </NavLink>
            </li>
            <li className="has-dropdown">
              <NavLink
                to="/technologies
                "
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Technologies
                <RiArrowDropDownLine style={{ fontSize: "25px" }} />
              </NavLink>

              {/*//! DROPDOWN MENU technologies */}

              <ul className="dropdown dropdown-2">
                <li className="dropdown-item">
                  <NavLink
                    to="/technologies/imax"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >IMAX
                  </NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink
                    to="/technologies/laser"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    LASER
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link
                to="/"
              >
                More
                <RiArrowDropDownLine style={{ fontSize: "25px" }} />

              </Link>

              {/*//! DROPDOWN MENU about */}

              <ul className="dropdown dropdown-3">
                <li className="dropdown-item">
                  <Link
                    to="/about"
                  >About
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/about/privacy"
                  >
                    Privacy
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/about/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/about/cookies"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            {mode === "light" ? <MdModeNight className='theme-button' onClick={changeTheme} /> : <MdLightMode className='theme-button' onClick={changeTheme} />}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
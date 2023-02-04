import React, { useContext } from 'react'
import "./style.scss"
import { Link, NavLink } from "react-router-dom"
import { MainContext } from "../../../context/ContextProvider"
import logo from "../../../assets/download.svg"
import { MdModeNight, MdLightMode } from "react-icons/md"
import { CgArrowDownO } from "react-icons/cg"
import ThreePoints from './ThreePoints'
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
            <li>
              <NavLink
                to="/cinemas"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Cinemas
              </NavLink>
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
            <li className="nav-item has-dropdown">
              <NavLink
                to="/technologies
                "
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Technologies
                <CgArrowDownO style={{ fontSize: "20px" }} />
              </NavLink>

              {/*//! DROPDOWN MENU 1 */}

              <ul className="dropdown dropdown-1">
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
            <li className="nav-item has-dropdown">
              <NavLink
                to="/"
                style={{ letterSpacing: "10px" }}

              >
                <ThreePoints />
              </NavLink>

              {/*//! DROPDOWN MENU 2 */}

              <ul className="dropdown dropdown-2">
                <li className="dropdown-item">
                  <NavLink
                    to="/about"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >About
                  </NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink
                    to="/about/privacy"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    Privacy
                  </NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink
                    to="/about/contact"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink
                    to="/about/cookies"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    Cookies
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            {mode === "light" ? <MdModeNight onClick={changeTheme} style={{ cursor:"pointer", fontSize: "30px" }} /> : <MdLightMode onClick={changeTheme} style={{ fontSize: "30px", cursor:"pointer" }} />}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
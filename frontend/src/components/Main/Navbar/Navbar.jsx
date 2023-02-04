import React, { useContext } from 'react'
import "./style.scss"
import { Link, NavLink } from "react-router-dom"
import { MainContext } from "../../../context/ContextProvider"
import logo from "../../../assets/download.svg"
import { MdModeNight, MdLightMode } from "react-icons/md"
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
          <Link to="/"><img className='logo' style={{ width: "200px", color: "red" }} src={logo} alt="logo" /></Link>
          <ul>
            <li>
              <NavLink
                to="/cinemas"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                KinoTeatrlar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/actions"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Aksiyalar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/actions"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Aksiyalar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/actions"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Aksiyalar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/actions"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Aksiyalar
              </NavLink>
            </li>
          </ul>
          <ul>
            {mode === "light" ? <button className='btn btn--stripe btn--radius' onClick={changeTheme}><MdModeNight style={{ fontSize: "18px" }} /> dark</button> : <button className='btn btn--stripe btn--radius' onClick={changeTheme}><MdLightMode style={{ fontSize: "18px" }} /> light</button>}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
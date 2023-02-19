import React, { useContext, useEffect } from 'react'
import "./style.scss"
import { Link, NavLink } from "react-router-dom"
import { MainContext } from "../../../context/ContextProvider"
import logo from "../../../assets/logo/download.svg"
import { MdModeNight, MdLightMode } from "react-icons/md"
import { RiArrowDropDownLine } from "react-icons/ri"
import axios from 'axios';

function Navbar() {

  const activeStyle = {
    color: "red"
  }
  const { mode, setMode, cinemas, setCinemas } = useContext(MainContext)
  const changeTheme = () => {
    setMode(mode === "dark" ? "light" : "dark")
  }
  const URL = 'http://localhost:8080/cinemas';

  const getData = async () => {
    await axios.get(URL).then((res) => setCinemas(res.data));
  }

  useEffect(() => {
    getData();
  }, [])

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
                to="/schedule"
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
                {cinemas?.map((data) => {
                  return (
                    <li className="dropdown-item" key={data._id}>
                      <Link
                        to={`/cinemas/${data._id}`} target="_blank"
                      >
                        {data.name}
                      </Link>
                    </li>
                  )
                })}
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
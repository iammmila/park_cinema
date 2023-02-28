import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom"
import { MainContext } from "../../../context/ContextProvider"
import axios from 'axios';

//general scss
import "./Navbar.scss"

//icons
import { MdModeNight, MdLightMode } from "react-icons/md"
import { RiArrowDropDownLine } from "react-icons/ri"

//logo
import logo from "../../../assets/logo/download.svg"

//components
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

function Navbar() {
  const activeStyle = {
    color: "red"
  }

  const { mode, cinemas, setCinemas, CinemasURL, changeTheme } = useContext(MainContext)

  const getData = async () => {
    await axios.get(CinemasURL).then((res) => setCinemas(res.data));
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        to={`/cinemas/${data._id}`}
                      >
                        {data.cinemaName}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li>
              <NavLink
                to="/campaigns"
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
              <span
              >
                Technologies
                <RiArrowDropDownLine style={{ fontSize: "25px" }} />
              </span>

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
              <span
              >
                More
                <RiArrowDropDownLine style={{ fontSize: "25px" }} />
              </span>

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
                    to="/about/advertising"
                  >
                    Advertising Offer
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className='mode_section'>
            {mode === "light" ? <MdModeNight className='theme-button' onClick={changeTheme} /> : <MdLightMode className='theme-button' onClick={changeTheme} />}
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { MainContext } from './../../../context/ContextProvider';

//general scss
import "./Navbar.scss"

//icons
import { MdModeNight, MdLightMode } from 'react-icons/md';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, changeTheme } = useContext(MainContext)

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='admin_nav'>
      <div className="container">
        <div className='nav_wrapper'>
          <div className="hamburger-menu">
            <button className={`hamburger ${isOpen ? 'hamburger--open' : ''}`} onClick={handleClick}>
              <span className="hamburger__box">
                <span className="hamburger__inner"></span>
              </span>
            </button>
            <nav className={`hamburger-menu__nav ${isOpen ? 'hamburger-menu__nav--open' : ''}`}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li><Link to="/admin/users">Admins</Link></li>
                <li><Link to="/admin/cinemas">Cinemas</Link></li>
                <li><Link to="/admin/films">Films</Link></li>
                <li><Link to="/admin/languages">Languages</Link></li>
                <li><Link to="/admin/subtitles">Subtitles</Link></li>
                <li><Link to="/admin/formats">Formats</Link></li>
                <li><Link to="/admin/campaigns">Campaigns</Link></li>
                <li><Link to="/admin/contact">Contact</Link></li>
              </ul>
            </nav>
            {mode === "light" ? <MdModeNight className='theme-button' onClick={changeTheme} /> : <MdLightMode className='theme-button' onClick={changeTheme} />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
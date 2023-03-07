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
                <li><Link to="/admin/" onClick={handleClick}>Dashboard</Link></li>
                {/* <li><Link to="/admin/users" onClick={handleClick}>Admins</Link></li> */}
                {/* <li><Link to="/admin/cinemas" onClick={handleClick}>Cinemas</Link></li> */}
                <li><Link to="/admin/films" onClick={handleClick}>Films</Link></li>
                <li><Link to="/admin/languages" onClick={handleClick}>Languages</Link></li>
                {/* <li><Link to="/admin/subtitles" onClick={handleClick}>Subtitles</Link></li>
                <li><Link to="/admin/formats" onClick={handleClick}>Formats</Link></li>
                <li><Link to="/admin/campaigns" onClick={handleClick}>Campaigns</Link></li>
                <li><Link to="/admin/contact" onClick={handleClick}>Contact</Link></li> */}
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
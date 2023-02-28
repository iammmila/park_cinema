import React, { useState } from 'react'
import { Link } from 'react-router-dom';

//general scss
import "./HamburgerMenu.scss"

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="display">
            <div className="hamburger-menu">
                <button className={`hamburger ${isOpen ? 'hamburger--open' : ''}`} onClick={handleClick}>
                    <span className="hamburger__box">
                        <span className="hamburger__inner"></span>
                    </span>
                </button>
                <nav className={`hamburger-menu__nav ${isOpen ? 'hamburger-menu__nav--open' : ''}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/schedule">Schedule</Link></li>
                        <li><Link to="/cinemas">Cinemas</Link></li>
                        <li><Link to="/campaigns">Campaigns</Link></li>
                        <li><Link to="/vip">VIP</Link></li>
                        <li><Link to="/technologies/imax">IMAX</Link></li>
                        <li><Link to="/technologies/laser">LaseR</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/about/privacy">Privacy</Link></li>
                        <li><Link to="/about/advertising">Advertising Offer</Link></li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default HamburgerMenu
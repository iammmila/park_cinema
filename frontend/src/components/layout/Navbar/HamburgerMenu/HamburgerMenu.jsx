import React, { useState } from 'react'
import { Link } from 'react-router-dom';

//general scss
import "./HamburgerMenu.scss"

function HamburgerMenu() {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };
    return (
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <Link to=""><li>Home</li></Link>
                    <Link to="/"><li>About</li></Link>
                    <Link to="/"><li>Info</li></Link>
                    <Link to="/"><li>Contact</li></Link>
                    <Link to="https://erikterwan.com/" target="_blank"><li>Show me more</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default HamburgerMenu
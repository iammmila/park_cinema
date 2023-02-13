import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
import logo from "../../../assets/logo/download.svg"
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_top">
          <ul className='navlist'>
            <ul>
              <h2>Content</h2>
              <li className='content__item'>
                <Link className='link link--dia'
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className='content__item'>
                <Link className='link link--dia'
                  to="/programs"
                >
                  Schedule
                </Link>
              </li>
              <li className='content__item'>
                <Link className='link link--dia'
                  to="/cinemas"
                >
                  Cinemas
                </Link>
              </li>
              <li className='content__item'>
                <Link className='link link--dia'
                  to="/campaign"
                >
                  Campaigns
                </Link>
              </li>
              <li className='content__item'>
                <Link className='link link--dia'
                  to="/vip"
                >
                  VIP
                </Link>
              </li>
            </ul>
            <ul>
              <h2>Technologies</h2>
              <li >
                <Link className='link link--dia'
                  to="/technologies/imax"

                >IMAX
                </Link>
              </li>
              <li className='content__item'>
                <Link className='link link--dia'
                  to="/technologies/laser"
                >
                  LASER
                </Link>
              </li>
            </ul>
            <ul>
              <h2>Information</h2>
              <li >
                <Link className='link link--dia'
                  to="/"
                  style={{ letterSpacing: "10px" }}
                >
                </Link>
              </li>
              <li className='content__item'>
                <Link className='link link--dia'
                  to="/about"
                >About
                </Link>
              </li>
              <li className='content__item'>
                <Link className='link link--dia'
                  to="/about/privacy"
                >
                  Privacy
                </Link>
              </li>
              <li className='content__item'>
                <Link className='link link--dia'
                  to="/about/contact"
                >
                  Contact
                </Link>
              </li>
              <li className='content__item'>
                <Link className='link link--dia'
                  to="/about/cookies"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </ul>
          <Link to="/"><img className='logo' style={{ width: "300px" }} src={logo} alt="logo" /></Link>

        </div>
        <hr />
        <div className='footer_bottom'>
          <h4 style={{ color: "white" }}>
            © Copyright MI. All Rights Reserved
          </h4>
          <div className='social-medias'>
            <BsFacebook className='icon' />
            <BsYoutube className='icon' />
            <BsTwitter className='icon' />
            <BsInstagram className='icon' />
          </div>
          <h4>Designed by <span>Malahat Ibrahimova</span></h4>
        </div>
      </div >
    </footer >
  )
}

export default Footer
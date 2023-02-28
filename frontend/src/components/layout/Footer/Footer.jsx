import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//general scss
import "./Footer.scss"

//logo
import logo from "../../../assets/logo/download.svg"

//social medias icons
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"

//context
import { MainContext } from '../../../context/ContextProvider'

function Footer() {
  const { cinemas, setCinemas, CinemasURL } = useContext(MainContext)

  const getData = async () => {
    await axios.get(CinemasURL).then((res) => setCinemas(res.data));
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              <h2>Cinemas</h2>
              {/* //!Cinemas*/}
              {
                cinemas?.map((data) => (
                  <li className='content__item' key={data._id}>
                    <Link
                      className='link link--dia'
                      to={`/cinemas/${data._id}`}
                    >
                      {data.cinemaName}
                    </Link>
                  </li>
                ))
              }
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
                  to="/about/advertising"
                >
                  Advertising Offer
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
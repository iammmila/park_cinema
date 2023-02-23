import React from 'react'
import { Link } from 'react-router-dom';

//icons
import { IoIosArrowForward } from "react-icons/io"

//general scss
import "./Subscribe.scss"

function Subscribe() {

  function handleClick(e) { e.preventDefault() };
  
  return (
    <section className='subscribe'>
      <div className="container">
        <div className="subscribe_wrapper">
          <h2>Every month, a letter from an amazing creative film to you.</h2>
          <form>
            <input type="email" placeholder='your email here' />
            <button onClick={handleClick}>
              <IoIosArrowForward />
            </button>
          </form>
          <span>Keep us close through our "social media" accounts</span>
          <span>Follow us on <Link to="https://www.twitter.com" target={'_blank'}>Twitter</Link>, <Link to="https://www.facebook.com" target={'_blank'}>Facebook</Link> & <Link to="https://www.instagram.com" target={'_blank'}>Instagram</Link></span>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
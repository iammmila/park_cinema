import React from 'react'
import "./style.scss"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from 'react-router-dom';
function Subscribe() {
  return (
    <section className='subscribe'>
      <div className="container">
        <div className="subscribe_wrapper">
          <h2>Every month, a letter from an amazing creative film to you.</h2>
          <form>
            <input type="email" placeholder='your email here' />
            <button>
              <IoIosArrowForward/>
            </button>
          </form>
          <span>Keep us close through our "social media" accounts</span>
          <span>Follow us on <Link to="https://www.twitter.com" target={'_blank'}>Twitter</Link>, <Link to="https://www.twitter.com" target={'_blank'}>Twitter</Link> & <Link to="https://www.twitter.com" target={'_blank'}>Twitter</Link></span>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
import React from 'react'
import { Link } from 'react-router-dom';

//film images
import film1 from "../../../../assets/films_images/Avatar.jpg"
import film2 from "../../../../assets/films_images/_ыфнееее_resized.jpg"
import film3 from "../../../../assets/films_images/kutsal-1_resized.png"


//general component's scss
import "./style.scss"

function CardsSoon() {
  return (
    <div className='soon_cards_wrapper'>
      <ul className='cards_soon'>
        <li className="card_soon">
          {/* <img className='soon-poster' src={soon} alt="soon" /> */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film2})` }}></div>
            <div className="card__content">
              <p class="card__category">20 jan, 2023</p>
              <h3 className="card__heading">Avatar: The way of water</h3>
            </div>
          </Link>
          {/* <ButtonBuy /> */}
        </li>
        <li className="card_soon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film1})` }} ></div>
            <div className="card__content">
              <p class="card__category">20 jan, 2023</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          {/* <ButtonBuy /> */}
        </li>
        <li className="card_soon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film2})` }} ></div>
            <div className="card__content">
              <p class="card__category">20 jan, 2023</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          {/* <ButtonBuy /> */}
        </li>
        <li className="card_soon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film3})` }} ></div>
            <div className="card__content">
              <p class="card__category">20 jan, 2023</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          {/* <ButtonBuy /> */}
        </li>
        <li className="card_soon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film2})` }}  ></div>
            <div className="card__content">
              <p class="card__category">20 jan, 2023</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          {/* <ButtonBuy /> */}
        </li>
        <li className="card_soon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film3})` }}></div>
            <div className="card__content">
              <p class="card__category">20 jan, 2023</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          {/* <ButtonBuy /> */}
        </li>
        <li className="card_soon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film3})` }} ></div>
            <div className="card__content">
              <p class="card__category">20 jan, 2023</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          {/* <ButtonBuy /> */}
        </li>
        <li className="card_soon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film2})` }}  ></div>
            <div className="card__content">
              <p class="card__category">20 jan, 2023</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          {/* <ButtonBuy /> */}
        </li>
        <li className="card_soon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film3})` }}></div>
            <div className="card__content">
              <p class="card__category">20 jan, 2023</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          {/* <ButtonBuy /> */}
        </li>
      </ul>
    </div>
  )
}

export default CardsSoon
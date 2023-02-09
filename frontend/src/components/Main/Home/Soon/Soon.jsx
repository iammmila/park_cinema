import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom';
import img1 from "../../../../assets/films_images/Avatar.jpg"
function Soon() {
  return (
    <section className='soon-films'>
      <div className="container">
        <div className="wrapper-films">
          <div style={{ width: "18%" }} className='line' ></div>
          <h1>Soon Movies</h1>
          <ul className='cards'>
            <li class="card">
              <div class="card-img">
                <img src={img1} alt="Product" class="img-responsive" />
              </div>
              <div class="card-text">
                <div class="category">
                  <span>Ethnic</span>
                </div>
                <div class="title-film">
                  <h3>My face not my heart</h3>
                </div>
                <div class="description-film">
                  <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                </div>
                <div class="card-footer">
                  <div class="card-left"><span class="price">Rp500.000</span></div>
                  <div class="card-right"> </div>
                </div>
              </div>
            </li>
            {/* <li class="card">
              <div class="card-img">
                <img src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg" alt="Product" class="img-responsive" />
              </div>
              <div class="card-text">
                <div class="category">
                  <span>Ethnic</span>
                </div>
                <div class="title-film">
                  <h3>My face not my heart</h3>
                </div>
                <div class="description-film">
                  <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                </div>
                <div class="card-footer">
                  <div class="card-left"><span class="price">Rp500.000</span></div>
                  <div class="card-right"> </div>
                </div>
              </div>
            </li>
            <li class="card">
              <div class="card-img">
                <img src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg" alt="Product" class="img-responsive" />
              </div>
              <div class="card-text">
                <div class="category">
                  <span>Ethnic</span>
                </div>
                <div class="title-film">
                  <h3>My face not my heart</h3>
                </div>
                <div class="description-film">
                  <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                </div>
                <div class="card-footer">
                  <div class="card-left"><span class="price">Rp500.000</span></div>
                  <div class="card-right"> </div>
                </div>
              </div>
            </li>
            <li class="card">
              <div class="card-img">
                <img src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg" alt="Product" class="img-responsive" />
              </div>
              <div class="card-text">
                <div class="category">
                  <span>Ethnic</span>
                </div>
                <div class="title-film">
                  <h3>My face not my heart</h3>
                </div>
                <div class="description-film">
                  <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                </div>
                <div class="card-footer">
                  <div class="card-left"><span class="price">Rp500.000</span></div>
                  <div class="card-right"> </div>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div >
    </section >
  )
}

export default Soon
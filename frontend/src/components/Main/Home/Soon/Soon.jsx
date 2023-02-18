import React from 'react'

//general scss
import "./style.scss"

//films' images
import film1 from "../../../../assets/films_images/Avatar.jpg"
import film2 from "../../../../assets/films_images/_ыфнееее_resized.jpg"
import film3 from "../../../../assets/films_images/kutsal-1_resized.png"
import film4 from "../../../../assets/films_images/megan_saytt_resized.jpg"
import film5 from "../../../../assets/films_images/my_shitdifejuheolndf_resized.jpg"

//soon poster
import soon from "../../../../assets/images/soon2.png"

function Soon() {
  return (
    <section className='soon-films'>
      <div className="container">
        <div className="wrapper-films">
          <div style={{ width: "18%" }} className='line' ></div>
          <h1>Soon Movies</h1>
          <ul className='cards'>
            <li className="card">
              <img className='soon-poster' src={soon} alt="soon" />
              <div className="card-img">
                <img src={film1} alt="film" className="img-responsive" />
              </div>
              <div className="card-text">
                <div className="category">
                </div>
                <div className="title-film">
                  <h3>Avatar: Suyun yolu</h3>
                  <span> Feb 20, 2023</span>
                </div>
                <div className="description-film">
                </div>
              </div>
            </li>
            <li className="card">
              <img className='soon-poster' src={soon} alt="soon" />
              <div className="card-img">
                <img src={film2} alt="film" className="img-responsive" />
              </div>
              <div className="card-text">
                <div className="category">
                </div>
                <div className="title-film">
                  <h3>Avatar: Suyun yolu</h3>
                  <span> Feb 20, 2023</span>
                </div>
                <div className="description-film">
                </div>
              </div>
            </li>
            <li className="card">
              <img className='soon-poster' src={soon} alt="soon" />
              <div className="card-img">
                <img src={film3} alt="film" className="img-responsive" />
              </div>
              <div className="card-text">
                <div className="category">
                </div>
                <div className="title-film">
                  <h3>Avatar: Suyun yolu</h3>
                  <span> Feb 20, 2023</span>
                </div>
                <div className="description-film">
                </div>
              </div>
            </li>
            <li className="card">
              <img className='soon-poster' src={soon} alt="soon" />
              <div className="card-img">
                <img src={film4} alt="film" className="img-responsive" />
              </div>
              <div className="card-text">
                <div className="category">
                </div>
                <div className="title-film">
                  <h3>Avatar: Suyun yolu</h3>
                  <span> Feb 20, 2023</span>
                </div>
                <div className="description-film">
                </div>
              </div>
            </li>
            <li className="card">
              <img className='soon-poster' src={soon} alt="soon" />
              <div className="card-img">
                <img src={film5} alt="film" className="img-responsive" />
              </div>
              <div className="card-text">
                <div className="category">
                </div>
                <div className="title-film">
                  <h3>Avatar: Suyun yolu</h3>
                  <span> Feb 20, 2023</span>
                </div>
              </div>
            </li>
            <li className="card">
              <img className='soon-poster' src={soon} alt="soon" />
              <div className="card-img">
                <img src={film1} alt="film" className="img-responsive" />
              </div>
              <div className="card-text">
                <div className="category">
                  {/* <span>Ethnic</span> */}
                </div>
                <div className="title-film">
                  <h3>Avatar: Suyun yolu</h3>
                  <span> Feb 20, 2023</span>
                </div>
                <div className="description-film">
                  {/* <p>Description film tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p> */}
                </div>
                {/* <div className="card-footer">
                  <div className="card-left"><span className="price">Rp500.000</span></div>
                  <div className="card-right"> </div>
                </div> */}
              </div>
            </li>
          </ul>
        </div>
      </div >
    </section >
  )
}

export default Soon
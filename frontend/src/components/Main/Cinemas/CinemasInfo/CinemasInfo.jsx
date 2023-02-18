import React from 'react'
import { Link } from 'react-router-dom';

//cinemas' images
import cinema1 from "./../../../../assets/images/cinemas/aygunmall.jpg"
import cinema2 from "./../../../../assets/images/cinemas/Flametowers.jpg"
import cinema3 from "./../../../../assets/images/cinemas/Metropark.jpg"
import cinema4 from "./../../../../assets/images/cinemas/parkbulvar.jpg"
import cinema5 from "./../../../../assets/images/cinemas/shahdag.png"
import cinema6 from "./../../../../assets/images/cinemas/Zaqulba.jpg"

//general scss
import "./style.scss"

function CinemasInfo() {
  return (
    <section className='cinemas_information'>
      <div className="container">
        <div className="wrapper_cinemas">
          <div style={{ width: "18%" }} className='line' ></div>
          <h1>Cinemas</h1>
          <ul className='cards_cinemas'>
            <li className="card_cinema">
              <Link to="/cinemas/aygunmall">
                <div className="card-img">
                  <img src={cinema1} alt="cinema" className="img-responsive" />
                </div>
                <div className="card-text">
                  <div className="title-cinema">
                    <h3>PARK BULVAR</h3>
                  </div>
                  <div className="card-footer">
                    <div className="card-left"><span className="address">Address:</span></div>
                    <div className="card-right">Neftçilər pr-ti 78, Park Bulvar Əyləncə Mərkəzi, 4-cü mertəbə</div>
                    <br />
                    <div className="card-left"><span className="phone">Phone:</span></div>
                    <div className="card-right"> +994 12 598 74 14, 119</div>
                    <br />
                    <div className="card-left"><span className="hours">Work hours:</span></div>
                    <div className="card-right">10:00 - 01:00</div>
                    <br />
                  </div>
                </div>
              </Link>
            </li>
            <li className="card_cinema">
              <Link to="/cinemas/flametowers">
                <div className="card-img">
                  <img src={cinema2} alt="cinema" className="img-responsive" />
                </div>
                <div className="card-text">
                  <div className="title-cinema">
                    <h3>PARK BULVAR</h3>
                  </div>
                  <div className="card-footer">
                    <div className="card-left"><span className="address">Address:</span></div>
                    <div className="card-right">Neftçilər pr-ti 78, Park Bulvar Əyləncə Mərkəzi, 4-cü mertəbə</div>
                    <br />
                    <div className="card-left"><span className="phone">Phone:</span></div>
                    <div className="card-right"> +994 12 598 74 14, 119</div>
                    <br />
                    <div className="card-left"><span className="hours">Work hours:</span></div>
                    <div className="card-right">10:00 - 01:00</div>
                    <br />
                  </div>
                </div>
              </Link>
            </li>
            <li className="card_cinema">
              <Link to="/cinemas/metropark">
                <div className="card-img">
                  <img src={cinema3} alt="cinema" className="img-responsive" />
                </div>
                <div className="card-text">
                  <div className="title-cinema">
                    <h3>PARK BULVAR</h3>
                  </div>
                  <div className="card-footer">
                    <div className="card-left"><span className="address">Address:</span></div>
                    <div className="card-right">Neftçilər pr-ti 78, Park Bulvar Əyləncə Mərkəzi, 4-cü mertəbə</div>
                    <br />
                    <div className="card-left"><span className="phone">Phone:</span></div>
                    <div className="card-right"> +994 12 598 74 14, 119</div>
                    <br />
                    <div className="card-left"><span className="hours">Work hours:</span></div>
                    <div className="card-right">10:00 - 01:00</div>
                    <br />
                  </div>
                </div>
              </Link>
            </li>
            <li className="card_cinema">
              <Link to="/cinemas/parkbulvar">
                <div className="card-img">
                  <img src={cinema4} alt="cinema" className="img-responsive" />
                </div>
                <div className="card-text">
                  <div className="title-cinema">
                    <h3>PARK BULVAR</h3>
                  </div>
                  <div className="card-footer">
                    <div className="card-left"><span className="address">Address:</span></div>
                    <div className="card-right">Neftçilər pr-ti 78, Park Bulvar Əyləncə Mərkəzi, 4-cü mertəbə</div>
                    <br />
                    <div className="card-left"><span className="phone">Phone:</span></div>
                    <div className="card-right"> +994 12 598 74 14, 119</div>
                    <br />
                    <div className="card-left"><span className="hours">Work hours:</span></div>
                    <div className="card-right">10:00 - 01:00</div>
                    <br />
                  </div>
                </div>
              </Link>
            </li>
            <li className="card_cinema">
              <Link to="/cinemas/shahdag">
                <div className="card-img">
                  <img src={cinema5} alt="cinema" className="img-responsive" />
                </div>
                <div className="card-text">
                  <div className="title-cinema">
                    <h3>PARK BULVAR</h3>
                  </div>
                  <div className="card-footer">
                    <div className="card-left"><span className="address">Address:</span></div>
                    <div className="card-right">Neftçilər pr-ti 78, Park Bulvar Əyləncə Mərkəzi, 4-cü mertəbə</div>
                    <br />
                    <div className="card-left"><span className="phone">Phone:</span></div>
                    <div className="card-right"> +994 12 598 74 14, 119</div>
                    <br />
                    <div className="card-left"><span className="hours">Work hours:</span></div>
                    <div className="card-right">10:00 - 01:00</div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="card_cinema">
              <Link to="/cinemas/zaqulba">
                <div className="card-img">
                  <img src={cinema6} alt="cinema" className="img-responsive" />
                </div>
                <div className="card-text">
                  <div className="title-cinema">
                    <h3>PARK BULVAR</h3>
                  </div>
                  <div className="card-footer">
                    <div className="card-left"><span className="address">Address:</span></div>
                    <div className="card-right">Neftçilər pr-ti 78, Park Bulvar Əyləncə Mərkəzi, 4-cü mertəbə</div>
                    <br />
                    <div className="card-left"><span className="phone">Phone:</span></div>
                    <div className="card-right"> +994 12 598 74 14, 119</div>
                    <br />
                    <div className="card-left"><span className="hours">Work hours:</span></div>
                    <div className="card-right">10:00 - 01:00</div>
                    <br />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CinemasInfo
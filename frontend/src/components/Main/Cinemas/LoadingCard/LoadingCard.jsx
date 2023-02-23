import React from 'react'
import { Link } from 'react-router-dom';

//general scss
import "./LoadingCard.scss"

function LoadingCard() {
    return (
        //cards when data is coming
        <li className="card_cinema is-loading">
            <Link to="/cinemas/aygunmall">
                <div className="card-img">
                </div>
                <div className="card-text">
                    <div className="title-cinema">
                        <h3> </h3>
                    </div>
                    <div className="card-footer">
                        <div className="card-left"><span className="address"></span></div>
                        <div className="card-right"></div>
                        <br />
                        <div className="card-left"><span className="phone"></span></div>
                        <div className="card-right"> </div>
                        <br />
                        <div className="card-left"><span className="hours"></span></div>
                        <div className="card-right"></div>
                        <br />
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default LoadingCard
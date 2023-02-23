import React from 'react'
import { Link } from 'react-router-dom';

//general scss
import "./ButtonBuy.scss"

function ButtonBuy() {
    return (
        <Link to="/booking">
            <div className="btn_buy">
                <button>buy</button>
            </div>
        </Link >
    )
}

export default ButtonBuy